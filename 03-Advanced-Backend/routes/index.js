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



module.exports = router;
