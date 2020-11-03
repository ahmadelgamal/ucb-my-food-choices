const router = require("express").Router();
const sequelize = require("../config/connection");
const { Profile, User, Restriction } = require("../models");
const withAuth = require("../utils/auth");

// login render
router.get("/", (req, res) => {
  console.log("=====GET=app=======");
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("login", { title: "Login" });
});

router.get("/", (req, res) => {
  res.render("login", { title: "Login" });
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "Profile" });
});

router.get("/reports.html", (req, res) => {
  res.render("reports", { title: "Reports" });
});

router.get("/signup.html", (req, res) => {
  res.render("signup", { title: "Sign Up" });
});

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
