var express = require('express');
var router = express.Router();

//! Usecase of connect-flash 
// router.get('/login', function (req, res) {
//     // const {username,password} = req.body
//     const username = "remo"
//     const password = "pass"

//     if (username != "remo" || password != "pass") {
//       req.flash("type", "Error")
//       req.flash("alert", "danger")
//       req.flash("message", "Incorrect username/password")
//       res.redirect("/err")
//     }
//     else {
//       res.json({ message: "Logged in successfully !!!" })
//     }
// });

// router.get("/err", (req, res) => {
//   const type = req.flash("type");
//   const message = req.flash("message");
//   const alert = req.flash("alert");
//   res.render('index', { message, type, alert })
// })

//! Mongoose
const User = require("./users")

router.get("/", (req, res) => {
    res.render('index')
})

router.get("/create", async (req, res) => {
    const createdUser = await User.create({
        username: "Sharadindu",
        nickname: "sharadindu",
        description: "I am a devops engineer",
        categories: ["Aws", "CI/CD", "Cloud"]
    })
    res.send(createdUser)
})

router.get("/finduser", async (req, res) => {
    //! Case 1 
    // new RegExp(search, flags)
    // const regex = new RegExp("^remo$", "i");
    // const user = await User.find({username: regex})
    // res.send(user)

    //! Case 2
    // const user = await User.find({categories: {$all: ["MongoDB"]}})
    // res.send(user)

    //! Case 3
    const user = await User.find({
        createdAt: "2024-02-04T12:48:01.201+00:00"
    })
    res.send(user)
})

module.exports = router;
