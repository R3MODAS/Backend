const express = require('express');
const router = express.Router();
const User = require("./users")
const passport = require("passport")
const localStrategy = require("passport-local")

passport.use(new localStrategy(User.authenticate()))

router.get("/", (req,res) => {
    res.render("index")
})

router.get("/profile", isLoggedIn , (req, res) => {
    res.render("profile")
})

router.post("/register", (req, res) => {
    const userdata = new User({
        username: req.body.username,
        secret: req.body.secret
    })

    User.register(userdata, req.body.password)
        .then((registeredUser) => {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/profile");
            })
        })
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login"
}), (req, res) => {

})

router.get("/logout", (req,res,next) => {
    req.logout((err) => {
        if(err) return next(err)
        res.redirect("/")
    })
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/")
}

module.exports = router;
