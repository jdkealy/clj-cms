# clj-cms

A Clojure web app originally intended to be a fully-fledged CMS, but is just a simple CRUD app using clojure, clojurescript (om), and Datomic 

## Usage

git pull

lein ring server

lein cljsbuild auto

you must download datomic

unzip it and start a transactor from the datomic directory like so:

./bin/transactor config/samples/free-transactor-template.properties 


   

## License

Copyright © 2014 John Kealy!

Distributed under the Eclipse Public License, the same as Clojure.
