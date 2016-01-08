# MEAN Sample App

## Mongo Setup
### Install mongodb (osx)
- brew update
- brew install mongo

### Create the data directory
From cmd line...
- sudo mkdir -p /data/db
- sudo chown -R $USER /data/db


### Start mongo
From cmd line...  
`=> mongod1'  

### Create Database
From cmd line...  
`=> mongo`  

`> use dbname`  
swtiched to db dbname  

> db  
dbname  

> show dbs  

### Load collections from a script
From mongo cmd line...  
> load ('/Users/username/app-name/db-scripts/create-users.js')  

### Sample script
db = db.getSiblingDB('dbname');  

db.users.save({userName: "John Doe", login: "jdoe", email: "jdoe@me.com"});  
db.users.save({userName: "Jane Doe", login: "jndoe", email: "jndoe@me.com"});  

### Notes
- If testing rest api in postman, for POST and PUT, set request header as follows or data will not show up in request body  
-- Content-Type: application/json
- Updated project structure to add controllers. So the dialogue will be  
  Route -> Controller -> Model -> DB  
  
