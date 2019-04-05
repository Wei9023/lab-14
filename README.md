![CF](http://i.imgur.com/7v5ASc8.png) LAB-14
=================================================

## Access Control

### Author: Vanessa

### Links and Resources
* [repo]()
* [travis]()
* [back-end]()

#### Documentation
* [jsdoc]()

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/stuff
* `SECRET` - hello

#### Running the app
* First tab
    * mongod --dbpath=/Users/vanessa/codefellows/data/db 
* Second tab
    * mongo
* Third tab
    * nodemon
* Fourth tab
    * conmand line for http requests

* CLI for adding roles
    echo '{"role":"user", "capabilities":["read"]}' | http :3000/roles
    echo '{"role":"editor", "capabilities":["create", "read", "update"]}' | http :3000/roles
    echo '{"role":"admin", "capabilities":["create","read","update","delete"]}' | http :3000/roles

* CLI for signup
    *  echo '{"username":"yourname","password":"your pass word","role":"user/editor/admin"}' | http post :3000/signup
* CLI for signin 
    *  http post :3000/signin -a vv:hello (as user)
    *  http post :3000/signin -a addie:eddie (as editor)
* CLI for checking all the routes
    *  http get :3000/public-stuff -a 
    *  http get :3000/hidden-stuff -a vv:hello
    *  http get :3000/something-to-read -a vv:hello
    *  http post :3000/create-a-thing -a addie:eddie
    *  http patch :3000/update -a addie:eddie
    *  http delete :3000/bye-bye -a addie:eddie
    *  http get :3000/everything -a val:abc 

#### Tests
* How do you run tests?
  * npm run test
* What assertions were made?
  * Just the tests that came with the starter code
* What assertions need to be / should be made?
  * The additional tests requested in the lab docs

#### UML