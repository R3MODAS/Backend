const mongoose = require("mongoose")

// connection of mongodb server and adding a db
mongoose.connect("mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net/PracticeDB")

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("User", userSchema)
