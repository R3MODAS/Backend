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
    // const date1 = new Date('2024-02-04')
    // const date2 = new Date('2024-02-05')
    // const user = await User.find({ createdAt: { $gte: date1, $lte: date2 } })
    // res.send(user)

    //! Case 4 
    // const user = await User.find({ categories: {$exists: true} })
    // res.send(user)

    //! Case 5
    // try {
    //     const user = await User.find({
    //         $expr: {
    //             $and: [
    //                 { $gte: [{ $strLenCP: '$nickname' }, 0] },
    //                 { $lte: [{ $strLenCP: '$nickname' }, 6] }
    //             ]
    //         }
    //     })
    //     res.send(user)
    // }
    // catch (err) {
    //     console.log(err)
    // }

})

module.exports = router;
