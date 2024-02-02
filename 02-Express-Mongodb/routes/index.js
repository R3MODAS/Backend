var express = require('express');
var router = express.Router();
const User = require("./users")

router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

// CRUD operations in mongodb

router.get("/create", async (req, res) => {
  const createdUser = await User.create({
    username: "_remo_",
    name: "Remo",
    age: 24
  })
  res.send(createdUser)
})

router.get("/allusers", async (req, res) => {
  const allUsers = await User.find();
  res.send(allUsers)
})

router.get("/")

module.exports = router;
