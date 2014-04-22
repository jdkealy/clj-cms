(ns clj-cms.todos
  (:require
            [cheshire.core :as cc]
            [datomic.api :as d]
            [cheshire.core :refer :all]
            [cheshire.generate :refer [add-encoder encode-map]]
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
 (get-todos))

(defn get-todos-to-json []
  (let [todos (get-todos)]
    (vec  (map
           (fn [i] {:title (first i)
                   :id    (last i)
                   }) todos))))

(comment
  (get-todos-to-json)
  )

(defn get-todo [id]
  (d/touch (d/entity (d/db config/conn) id)))

(comment
                                        ; get a todo
  (get-todo 17592186045424)
  (get-todo 17592186045456)
  (get-todo 17592186045456)
  (get-todo 17592186045468)
  (get-todo 17592186045424)
  (get-todo 17592186045442)
  (get-todo 17592186045459)
  (d/touch (d/entity (d/db config/conn) 17592186045442)))

(defn create-todo [title]
  (let [todo @(d/transact
              config/conn
              [{:todo/name title :db/id #db/id[:db.part/user]}])]
    (cc/generate-string  todo)))a

(comment
  (create-todo "FOOBAR")
  )

(defn delete-todo [id]
  @(d/transact config/conn [[:db.fn/retractEntity (read-string id)]])
  {:success true})

(comment
  (delete-todo 17592186045459)
  (delete-todo 17592186045428)
  (delete-todo 17592186045456)
  (delete-todo 17592186045468)
  (delete-todo 17592186045436)
  (delete-todo 17592186045424)
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
  (let [todo (create-todo (:title todo))]
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
