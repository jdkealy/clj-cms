(ns clj-cms.pages
  (:use compojure.core)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [cheshire.core :as cc]
            [datomic.api :as d]
            [clj-cms.pages :as pages]
            [compojure.response :as response]
            )
  )
