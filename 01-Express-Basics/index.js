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