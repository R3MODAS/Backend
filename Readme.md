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

- Create Data (create a user) using UserModel.create({ name: "Ram", age : 99 })

- Read Data (finds all the users) using UserModel.find() and it returns a blank array if no users are found it returns null otherwise returns the array of user

- Read Data (find one of the user) using UserModel.findOne({username: "Remo"}) is used to find one element out of loads of users and returns null if no user is found then it returns null otherwise returns the user

- Delete Data (delete a user) using UserModel.findOneAndDelete({username: "Remo"}) is used to find one element and delete the data and if no data is found then it returns null otherwise returns the user

## Cookie and Session
- Data saved on browser/client -> Cookie and Data saved on server -> Session

- Session data is more safe than Cookie data as it can't be easily hacked by anyone

- npm i express-session to install session package and we can use it now to use session data

To set the middleware session we can use it like this

- app.use(session({
    resave: false // if the session value is not changed then don't resave the value to avoid load on server
    saveUninitialized: false // the data has no name then don't save it to avoid too much unnecessary data and cause load on server
    secret: secret_key // secret_key which will be used to encrypt the data on server
}))

- req.session.name = value to create a session, req.session.name to read the session from the server, req.session.destroy to remove the session from the server

- res.cookie(name,value) to create a cookie and sending it to the browser, req.cookies.name to read the cookie from the browser, res.clearCookie(name) to delete the cookie from the browser