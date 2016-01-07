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
- => mongod

### Create Database
From cmd line...
- => mongo

- > use dbname
- swtiched to db dbname

- > db
- dbname

- > show dbs

### Load collections from a script
- From mongo cmd line...
- > load ('/Users/username/app-name/db-scripts/create-users.js')

