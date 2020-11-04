const router = require("express").Router();
const sequelize = require("../config/connection");
const { Profile, User, Restriction } = require("../models");
const withAuth = require("../utils/auth");

// login render
router.get("/", (req, res) => {
  console.log("=====GET=login=app=====");
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("login", { title: "Login" });
});

// router.get("/", (req, res) => {
//   console.log("=====login=app======="); 
//   res.render("login", { title: "Login" });
// });

router.get("/signup", (req, res) => {
  console.log("=====GET=signup=app======="); 
  res.render("signup", { title: "Sign Up" });
});

router.get("/profile", (req, res) => {
  console.log("=====GET=profile=app======="); 
  res.render("profile", { title: "Profile" });
});

// router.get("/profile", (req, res) => {
//   console.log("=====GET=profile=app======="); 
//   res.render("profile", { title: "Profile" });
// });

// // POST routes
// app.post('/user', (req, res) => {
//     console.log(req.body);
//     // const user = new User(req.body);
//     // user.save().then((result) => {
//     //     res.redirect('profile');
//     // });
// });

// router.post('/Restriction', (req, res) => {
//     console.log(req.body);
// const user = new Restriction(req.body);
// user.save().then((result) => {
//     res.redirect('reports');
// });
// });

// 404
// router.use((req, res) => {
//     res.status(404).render('404', { title: '404'});
// });

module.exports = router;
