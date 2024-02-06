# Completed till Now
- Nodejs ✔
- Expressjs and its basics ✔
- ejs and Express generator ✔
- Mongodb - dbs, models(collections), schema(document) ✔
- Session and cookies ✔
- Creating sessions, using sessions across routes and destroying them ✔
- Creating cookies, using cookies across routes and destroying them ✔

# Ejs
EJS, or Embedded JavaScript is a popular template engine for Node.js that allows us to generate dynamic HTML content by embedding JavaScript code within your HTML templates.

Express.js ejs setup
- install ejs
- set view engine // app.set("view engine", "ejs")
- create views folder
- create ejs files
- render ejs files inside route
- express static files setup // app.use(express.static("public"))
- architecture of public folder (stylesheets,javascripts,images)

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

- npm i express-session and npm i cookie-parser to install session and cookie package to use session data and cookies data

To set the middleware session we can use it like this

- app.use(session({
    resave: false // It prevents the session from being saved back to the session store on every request, regardless of whether the session data has been modified.

    saveUninitialized: false // It ensures that the session is not saved for a request that doesn't modify the session data

    secret: secret_key // It is used to encrypt the data on server
}))

- req.session.name = value to create a session, req.session.name to read the session from the server, req.session.destroy to remove the session from the server

- res.cookie(name,value) to create a cookie and sending it to the browser, req.cookies.name to read the cookie from the browser, res.clearCookie(name) to delete the cookie from the browser

## Advanced part of Backend
Let's provide information to the user in flash messages (alerts such as success, warning or error)

- To create flash messages, we will require connect-flash package which we can install using npm i connect-flash but you will have to setup express-session and setup the middleware for the session as well.

- We can just get an alert message from bootstrap and now we have to execute flash message on different routes and we have to make sure that the data defined on one route is accessible to other routes as well but it is just not possible

- Flash message (package) allows us to send data made on one route and can be used on other routes as well

## Intermediate mongodb
Some Questions are here to solve for the advanced mongodb
- How to perform a case-insensitive search in mongoose?
- How do I find documents where an array field contains all of a set of values in mongoose?
- How can I search for documents with a specific date range in mongoose?
- How can I filter documents based on the existence of a field in mongoose?
- How can I filter documents based on a specific field's length in mongoose?

1. How to perform a case-insensitive search in mongoose ?

- we will create a model named userModel with a schema and now we are gonna use userModel.find({username: usernameToSearch}) but there is a problem that if the data we sent is slightly diff (uppercase/lowercase) from the db, it will not be able to find it so we need to use regex

- new Regex(data, flags) will return the data and to further find the exact user from the db (as there can be same name) we can use ^ and $ as ^ means starting should be like the data and $ means ending should be like the data. ^Sharad$ so it will return the data for sharad user only not for anyone else

2. How do I find documents where an array field contains all of a set of values?

- userModel.find({ categories: { $all: [dataToFind] } }) and this means that in categories array find all the data that matches the data inside the categories array

3. How can I search for documents with a specific date range in mongoose?

- userModel.find({ createdAt: {$gte: date1, $lte: date2} }) and this means that find the users whose data has been created within the specific date range as gte and lte means greater/lesser than equal

4. How can I filter documents based on the existence of a field in mongoose?

- userModel.find({ categories: {$exists: true} })

5. How can I filter documents based on a specific field's length in mongoose?

- const user = await User.find({
            $expr: {
                $and: [
                    { $gte: [{ $strLenCP: '$nickname' }, 0] },
                    { $lte: [{ $strLenCP: '$nickname' }, 6] }
                ]
            }
    })

- The $expr operator allows you to use aggregation expressions (used for complex situations) and $and is used to add two conditions and strLenCP (aggregated method) checks the length of the nickname and this whole thing is returning the users with nickname length >= 0 to length <= 6

## Authentication and Authorization(Theory)
- passport.js is used for that purpose and the heart of passport is strategy (type of login/signup) whether to use google/twitter/microsoft/local(username-password) and we can change the strategy anytime however it is required on our code. but for now we will use local strategy in our code.

- 3 npm packages are required here to work with authentication and authorization that is passport, passport-local, passport-local-mongoose

- Passport.js is a popular authentication middleware for Node.js, passport-local is used for the strategy that can be used (google/microsoft/local), passport-local-mongoose is used to add username, hashed password, and other necessary fields to the model along with the custom fields in mongoose.

## Authentication and Authorization(Practical)
- Install the packages mentioned above along with mongoose and express-session and write the app.js code first in app.js file and write it after view engine and before logger

- Setup users.js properly and in index.js try to register first and then other codes as well

## Understanding the code of aut

- app.use(expressSession(....)) // This will allow us to create session for the server to save data

- app.use(passport.initialize()) // This will initialize passport along with its power of authentication and authorization

- app.use(passport.session()) // This will create session for passport to save data

- passport.serializeUser(usersRouter.serializeUser()) and passport.deserializeUser(usersRouter.deserializeUser()) // This will serialize/deserialize user from the session. serializeUser is called during the login process to store the user information in the session, and deserializeUser is called on every subsequent request to restore/get the user object.