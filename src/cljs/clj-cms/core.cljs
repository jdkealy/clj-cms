(ns contacts.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:use [domina :only [by-id value set-value!]])
  (:require [goog.dom :as gdom]
            [goog.events :as events]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [ajax.core :refer [GET POST]]
            [cljs.core.async :refer [>! <! chan put!]])
  (:import [goog History]
           [goog.events EventType]
          ))

(enable-console-print!)

(defn fetch-items [app]
  (go
    (let [response (<! (http/get "/todos.json"))]
      (om/update! app :list (:body response)))
    ))

(def app-state (atom {:list []}))

(defn delete-item[app id]
  (om/transact! app :list (fn [items] (vec  (filter #(not= (:id %) id) items)))))

(defn add-item [items item]
  (om/transact! items :list (fn [items] (vec
                                      (conj items item)
                            ))))

(defn format-response
  [res-str]
  (let [res (-> res-str :body js/JSON.parse js->clj)]
    (zipmap (map keyword (keys res)) (vals res))))



(defn item-view [{:keys [id name] :as item} owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRender
    (render [this]
      (dom/li #js{
                  :className (str "row-fluid item well" (if (om/get-state owner :editing)
                                           " editing"
                                           ""))
                  :onClick (fn [e]
                             (if (om/get-state owner :editing)
                               (go
                                 (let [response (<! (http/delete (str "/todos.json/" id)))]
                                   ((:on-delete opts) id)))
                               (go
                                 (om/set-state! owner :editing true)
                                 (.setTimeout js/window #(om/set-state! owner :editing false) 1000))))}
              (dom/br nil)
              (dom/h2 nil (:name item))
              (dom/br nil)
              (dom/p #js{:className "pull-right item-id"} (:id item))
              ))))



(defn app-view [app owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (fetch-items app))
    om/IRender
    (render [this]
      (dom/div nil
              ;(om/build add-item-view app)
               (apply dom/ul #js{
                                 :className "container-fluid"
                                 }
                      (map (fn [item]
                             (om/build item-view item {:react-key (:id item) :opts {:on-delete #(delete-item app %)}}))
                           (:list app)))))))

(om/root
 app-view
 app-state
 {:target (. js/document (getElementById "app"))})

(defn add-item-view [app]
  (reify
    om/IRender
    (render [this]
      (dom/form
       #js{
           :className "navbar-form navbar-left"
           :onSubmit
           (fn [e]
             (let [val (value (by-id "todo_name"))]
               (when (not (= val ""))
                 (go
                   (set-value! (by-id "todo_name") "")
                   (let [res-str (<! (http/post "/todos.json" {:headers {"Content-Type" "application/json"} :body (str (js/JSON.stringify (clj->js  {:name val})))}))
                         res (format-response res-str)]
                     (add-item app res)
                     ))))
             (.preventDefault e))}
       (dom/div #js{
                    :className "form-group"}
                (dom/input #js{
                               :id "todo_name"
                               :className "form-control"
                               :placeholder "todo"}))
       (dom/button #js{
                       :type "submit"
                       :className "btn btn-default"}
         "Submit")))))
(om/root
 add-item-view
 app-state
 {:target (. js/document (getElementById "add-todo"))})


(defn todos-count [app]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (count (:list app))))))

(om/root
 todos-count
 app-state
 {:target (. js/document (getElementById "todos-count"))})
