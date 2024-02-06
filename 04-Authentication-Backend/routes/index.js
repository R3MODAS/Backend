const express = require('express');
const router = express.Router();
const User = require("./users")
const passport = require("passport")
const localStrategy = require("passport-local")

passport.use(new localStrategy(User.authenticate()))

module.exports = router;
