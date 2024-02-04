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

router.get("/", (req,res) => {
    res.render('index')
})

router.get("/create", async(req,res) => {
   const createdUser = await User.create({
    username: "Sharon",
    nickname: "sharon",
    description: "I am a sde-2 engineer",
    categories: ["Node", "Express", "Ruby", "GoLang"]
   })
   res.send(createdUser)
})

router.get("/findUser", async (req,res) => {
    //! Case 1 
    // new RegExp(search, flags)
    // const regex = new RegExp("^SHaRad$", "i");
    // const user = await User.find({username: regex})
    // res.send(user)

    //! Case 2
})

module.exports = router;
