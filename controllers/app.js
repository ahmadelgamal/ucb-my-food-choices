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

router.get("/signup", (req, res) => {
  console.log("=====GET=signup=app=======");
  res.render("signup", { title: "Sign Up" });
});

router.get("/profile", withAuth, (req, res) => {
  console.log("=====GET=profile=app=======");
  console.log(req.session.user_id)
 // [sequelize.literal('(SELECT email FROM user WHERE user.id = ${req.session.user_id};)')]
  
  if (req.session.user_id === 1) {
    res.redirect("/reports");
    return;
  }
  res.render("profile", { title: "Profile" });
});

router.get("/reports", withAuth, (req, res) => {
  console.log("=====GET=report=app=======");
  res.render("reports", { title: "Reports" });
});

// router.post('/Restriction', (req, res) => {
//     console.log(req.body);
// const user = new Restriction(req.body);
// user.save().then((result) => {
//     res.redirect('reports');
// });
// });


module.exports = router;
