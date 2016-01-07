# MEAN Sample App

## Mongo Setup
### Install mondodb
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
