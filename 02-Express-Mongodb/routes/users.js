const mongoose = require("mongoose")

// localhost:PORT
mongoose.connect("mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net/PracticeDB")

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

module.exports = mongoose.model("User", userSchema)