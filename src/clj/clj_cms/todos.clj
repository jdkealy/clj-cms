(ns clj-cms.todos
  (:require
            [cheshire.core :as cc]
            [datomic.api :as d]
            [cheshire.core :refer :all]
            [clj-cms.config :as config]
            [compojure.response :as response]))

(defn get-todos []
  (d/q
   '[:find ?name ?e
    :where
    [?e :todo/name ?name]]
   (d/db config/conn))
  )

(comment
  (get-todos)
  )

(defn get-todos-to-json []
  (let [todos (get-todos)]
    (vec  (map
           (fn [i] {:name (first i)
                   :id    (last i)
                   }) todos))))

(comment
  (get-todos-to-json)
  )

(defn get-todo [id]
  (let [todo
        (d/touch (d/entity (d/db config/conn) id))
        ]
    {:name (:todo/name todo) :id (:db/id todo)}))

(comment
  (get-todo 17592186045459)
  )

(defn create-todo [name]
  (let [
        todo @(d/transact
              config/conn
              [{:todo/name name :db/id #db/id[:db.part/user]}])
        ;created-todo
        ]
    (get-todo (first (vals (:tempids todo))))
    ;created-todo
    ))

(comment
  (create-todo "FOOBAR")
  )


(defn delete-todo [id]
  @(d/transact config/conn [[:db.fn/retractEntity (read-string id)]])
  {:success true})

(comment
  (delete-todo 17592186045442)
  )

(defn index []
  {:status 200
   :body( cc/generate-string (get-todos-to-json))
   :headers {"Content-Type" "application/json; charset=utf-8"}})

(defn delete [id]
  (let [res  ( delete-todo id)]
       {:status 200
        :body (cc/generate-string res)
        :headers {"Content-Type" "text/json; charset=utf-8"}}))

(defn create [todo]
  (let [todo (create-todo (:name todo))]
    {:status 200
     :body (cc/generate-string todo)
     :headers {"Content-Type" "text/json; charset=utf-8"}}))

(defn update []
  {:status 200
   :body (cc/generate-string {:success true})
   :headers {"Content-Type" "text/json; charset=utf-8"}})

(defn show []
  {:status 200
   :body (cc/generate-string {:success true})
   :headers {"Content-Type" "text/json; charset=utf-8"}})
