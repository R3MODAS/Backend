# Databases
Database is a place where the app stores their data.

Database are of two types (mainly)
- Relational Database (MySQL, SQL)
- Non Relational Database (MongoDB)

Code Side and MongoDB Side
- DB Setup -> DB Formation (Creation of DB)
- Model -> Collection
- Schema -> Documents

## Analogy to understand the Terms
- New App -> Data will be stored in the storage (DB) but we will use a container inside the DB to store the data and inside the container only the app's data 

- Variety of data inside the DB -> Models (code inside the DB) and the term in db is known as collection.

- Single data inside the variety of data is known as document which is basically the structure of the data (Schema)

## Setup MongoDB
- Install mongoosejs
- Require and setup connection
- Make schema
- Create Model and export

## CRUD operations in MongoDB
- ModelWeCreated -> UserModel and operations related to DB are mostly asynchronous so use async-await

- Create Data (create a user)  Eg: UserModel.create({ // include the fields with the value name: "Ram", age : 99 })

- Read Data (finds all the users) Eg:  UserModel.find()
  