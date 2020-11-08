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

  res.render("login", {
    title: "Login",
    navLinkText: "Sign Up",
    navLinkRoute: "signup",
    navLinkId: "signup",
    burgerNavLinkId: "burger-signup",
  });
});

router.get("/signup", (req, res) => {
  console.log("=====GET=signup=app=======");
  res.render("signup", {
    title: "Sign Up",
    navLinkText: "Login",
    navLinkRoute: "",
    navLinkId: "login",
    burgerNavLinkId: "burger-login",
  });
});

router.get("/profile", withAuth, (req, res) => {
  console.log("=====GET=profile=app=======");
  console.log(req.session.user_id);
  (user_name = sequelize.literal(
    `(SELECT user_name FROM user WHERE id =` + req.session.user_id
  )),
    console.log(user_name);

  if (req.session.user_id === 1) {
    res.redirect("/reports");
    return;
  }
  res.render("profile", {
    title: "Profile",
    navLinkText: "Logout",
    navLinkRoute: "logout",
    navLinkId: "logout",

    burgerNavLinkId: "burger-logout",
    firstName: user_name,
  });
});

router.get("/reports", withAuth, (req, res) => {
  console.log("=====GET=report=app=======");
  res.render("reports", {
    title: "Reports",
    navLinkText: "Logout",
    navLinkRoute: "logout",
    navLinkId: "logout",
    burgerNavLinkId: "burger-logout",
  });
});

// 404
router.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
    navLinkText: "Login",
    navLinkRoute: "",
    navLinkId: "login",
    burgerNavLinkId: "burger-login",
  });
});

module.exports = router;
