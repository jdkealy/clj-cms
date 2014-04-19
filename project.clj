(defproject clj-cms "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.2"]
            ]
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                [org.clojure/clojurescript "0.0-2173"]
                 [com.datomic/datomic-free "0.9.4699"]
                 [bidi "1.10.2"]
                 [om "0.5.3"]
                 [cljs-ajax "0.2.3"]
                 [secretary "1.1.0"]
                 [ring/ring "1.2.2"]
                 [compojure "1.1.6"]
                 [cljs-http "0.1.8"]
                 [fogus/ring-edn "0.2.0"]
                 [com.stuartsierra/component "0.2.1"]
                 [cheshire "4.0.3"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]]
  :ring {:handler clj-cms.core/app}
  :cljsbuild {:builds [{
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-dir "resources/public/js/out"
                                   :output-to "resources/public/js/main.js"
                                   :optimizations :none
                                   :source-map true
                                        ;:optimizations :whitespace
                                        ;:pretty-print true
                                   }
                        }]}
)
