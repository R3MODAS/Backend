const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

// connection of mongodb server and adding a db
mongoose.connect("mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net/PracticeDB")

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
})

userSchema.plugin(plm)

module.exports = mongoose.model("User", userSchema)
