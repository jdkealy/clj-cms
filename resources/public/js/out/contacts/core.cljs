(ns contacts.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [goog.events :as events]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [>! <! chan put!]])
  (:import [goog History]
           [goog.events EventType]
          ))

(enable-console-print!)

(defn fetch-items [app]
  (go
    (let [response (<! (http/get "/todos.json"))]
      (print (:body response))
      (om/update! app :list (:body response)))
    ))

(def app-state (atom {:list []}))

(defn delete-item[app id]
  (om/transact! app :list (fn [items] (vec  (filter #(not= (:id %) id) items)))))

(defn item-view [{:keys [id title] :as item} owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRender
    (render [this]
      (dom/li #js{
                  :className (str "item" (if (om/get-state owner :editing)
                                           " editing"
                                           ""))
                  :onClick (fn [e]
                             (if (om/get-state owner :editing)
                               (go
                                 (let [response (<! (http/delete "/todos.json/1"))]
                                   ((:on-delete opts) id)))
                               (go
                                 (om/set-state! owner :editing true)
                                 (.setTimeout js/window #(om/set-state! owner :editing false) 10000))))}
              (dom/h2 nil (:id item))
              (dom/h2 nil (:title item))))))


(defn add-item-view [owner]
  (reify
    om/IRender
    (render [this]
      (dom/form nil
                (dom/input nil)
                (dom/button nil "CLICK ME")

                ))))

(defn app-view [app owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (fetch-items app))
    om/IRender
    (render [this]
      (dom/div nil
              (om/build add-item-view app)
               (apply dom/ul nil
                      (map (fn [item]
                             (om/build item-view item {:react-key (:id item) :opts {:on-delete #(delete-item app %)}})
                             )
                           (:list app)))))))

(om/root
 app-view
 app-state
 {:target (. js/document (getElementById "app"))})
