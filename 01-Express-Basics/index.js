// express js boilerplate code
    // go to npm
    // search express
    // copy the code
// express js ejs setup
    // install ejs
    // set view engine
    // create views folder
    // create ejs files
    // render ejs files inside route
// express static files setup
// architecture of public folder

const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

let requestCount = 0
app.use((req,res,next) => {
    requestCount++;
    next()
})

app.get("/", (req,res) => {
    res.render("index", {name: "Remo", age: 24, count: requestCount})
})

app.listen(3000)