(ns clj-cms.core
  (:use

   [ring.adapter.jetty             :only [run-jetty]]
   [compojure.core                 :only [defroutes GET POST DELETE]]
   [ring.middleware.params         :only [wrap-params]]

   )

  (:require
   [compojure.route :as route]
   [cheshire.core :as cc]
   [compojure.handler :as handler]
   [datomic.api :as d]

                                        ; my app stuff
   [clj-cms.todos :as todos]
   [clj-cms.config :as config]))

(defn index-page []
  {
   :status 200
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body (slurp "resources/layout.html")})

(defroutes routes
  ; html pages
  (GET "/" [] (index-page))
  ;todos
  (GET    "/todos.json" [] (todos/index))
  (DELETE "/todos.json/:id" [id] (todos/delete id))

  ; i have a request payload that
  (POST "/todos.json" {message :params} (str "ThankK  " message))
  ;defaults
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))


(def app (wrap-params routes))

(defn -main []
  (run-jetty app {:port 3001}))

(-main)
