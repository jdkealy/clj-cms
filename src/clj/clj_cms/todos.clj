(ns clj-cms.todos
  (:require
            [cheshire.core :as cc]
            [datomic.api :as d]
            [clj-cms.config :as config]
            [compojure.response :as response]))

(defn get-todos []
  (d/q
   '[:find ?name ?e
    :where
    [?e :todo/name ?name]]
   (d/db config/conn)))

(defn get-todos-to-json []
  (let [todos (get-todos)]
    (vec  (map
           (fn [i] {:title (first i)
                   :id    (last i)
                   }) todos))))

(defn create-todo []
  {:name "FOOBAR!!", :id 123})

(defn index []
  (printf "HELLO WORLD")

  {:status 200
   :body( cc/generate-string (get-todos-to-json))
   :headers {"Content-Type" "application/json; charset=utf-8"}})

(defn delete [id]
  @(d/transact config/conn [[:db.fn/retractEntity id]])
  {:status 200
   :body (cc/generate-string {:success true})
   :headers {"Content-Type" "text/json; charset=utf-8"}})

(defn create [p]
  (let [todo create-todo]
    {:status 200
     :body (cc/generate-string (create-todo))
     :headers {"Content-Type" "text/json; charset=utf-8"}}))


(defn update []
  {:status 200
   :body (cc/generate-string {:success true})
   :headers {"Content-Type" "text/json; charset=utf-8"}})

(defn show []
  {:status 200
   :body (cc/generate-string {:success true})
   :headers {"Content-Type" "text/json; charset=utf-8"}})
