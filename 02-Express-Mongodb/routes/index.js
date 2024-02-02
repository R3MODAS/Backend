var express = require('express');
var router = express.Router();
const User = require("./users")

//! CRUD operations in mongodb
// creating user
// router.get("/create", async (req, res) => {
//   const createdUser = await User.create({
//     username: "remo",
//     name: "Remo",
//     age: 24
//   })
//   res.send(createdUser)
// })

// getting all users
// router.get("/allusers", async (req, res) => {
//   const allUsers = await User.find();
//   if(allUsers.length != 0){
//     res.send(allUsers)
//   }
//   else{
//     res.status(400).json({
//       message: 'There are no data for users !!!'
//     })
//   }
// })

// finding single user 
// router.get("/finduser", async (req,res) => {
//   const findUser = await User.findOne({username: "ram"})
//   if(findUser){
//     res.send(findUser)
//   }
//   else{
//     res.status(400).json({
//       message: 'User not found !!!'
//     })
//   }
// })

// deleting user
// router.get("/delete", async(req,res) => {
//   const deletedUser = await User.findOneAndDelete({
//     name: "Remo"
//   })
//   if(deletedUser){
//     res.send(deletedUser);
//   }
//   else{
//     res.status(400).json({
//       message: 'User not found !!!'
//     })
//   }
// })

//! Session
// router.get('/', (req, res) => {
//   req.session.ban = true;
//   res.render('index', { title: 'Express' });
// });

// router.get("/checkban", (req,res) => {
//   console.log(req.session)
//   if(req.session.ban === true){
//     res.send("You are banned")
//   }else{
//     res.send("You are not banned")
//   }
// })

// router.get("/removeban", (req,res) => {
//   req.session.destroy((err) => {
//     if(err) throw err
//     res.send("Ban has been removed")
//   });

// })

//! Cookie
// router.get('/', (req, res) => {
//   res.cookie("age",24)
//   res.render('index', { title: 'Express' });
// });

// router.get("/read", (req,res) => {
//   console.log(req.cookies.age)
//   res.send("Read the cookie")
// })

// router.get("/delete", (req,res) => {
//   res.clearCookie("age")
//   res.send("Delete the cookie")
// })

module.exports = router;
