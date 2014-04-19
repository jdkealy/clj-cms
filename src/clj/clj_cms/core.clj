(ns clj-cms.core
  (:use compojure.core)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [cheshire.core :as cc]
            [datomic.api :as d]
            [clj-cms.todos :as todos]
            [clj-cms.config :as config]
            [compojure.response :as response]
            )
  )

(defn index-page []{
    :status 200
    :headers {"Content-Type" "text/html; charset=utf-8"}
                    :body (slurp "resources/layout.html")})

(defroutes app
  ; html pages
  (GET "/" [] (index-page))

  ;todos
  (GET    "/todos.json" [] (todos/index))
  (DELETE "/todos.json/:id" [id] (todos/delete id))
  (POST   "/todos.json" [] (todos/create))

  ;defaults
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))
