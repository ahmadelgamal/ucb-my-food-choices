const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Profile, User, Restriction } = require("../models");

// redirects homepage to login
router.get("/", (req, res) => {
  res.redirect("/login");
});

// login render
router.get("/login", (req, res) => {
  console.log("=====GET=login=app=====");
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  res.render("login", { title: "Login", navLinkText: "Sign Up", navLinkRoute: "signup", navLinkId: "signup", burgerNavLinkId: "burger-signup" });
});

// signup render
router.get("/signup", (req, res) => {
  console.log("=====GET=signup=app=======");
  res.render("signup", { title: "Sign Up", navLinkText: "Login", navLinkRoute: "login", navLinkId: "login", burgerNavLinkId: "burger-login" });
});

// profile render
router.get("/profile", withAuth, (req, res) => {
  console.log("=====GET=profile=app=======");
  // admin login (id = 1) redirect to reports
  if (req.session.user_id === 1) {
    res.redirect("/reports");
    return;
  }
  res.render("profile", { title: "Profile", first_name: req.session.first_name, navLinkText: "Logout", navLinkRoute: "logout", navLinkId: "logout", burgerNavLinkId: "burger-logout" });
});

// reports render, GET profiles & build restrictionsReport object
router.get("/reports", withAuth, (req, res) => {
  console.log("====GET=REPORT====");
  Profile.findAll({
    attributes: [
      "id",
      "user_id",
      "restriction_id",
    ]
  }).then((dbRestrictData) => {

    const restrictionsReport = {
      "eggsCount": 0,
      "fishCount": 0,
      "glutenCount": 0,
      "peanutsCount": 0,
      "shellfishCount": 0,
      "soyCount": 0,
      "treenutCount": 0,
      "wheatCount": 0,
      "celiacCount": 0,
      "diabetesCount": 0,
      "goutCount": 0,
      "hypertensionCount": 0,
      "lactoseCount": 0,
      "buddhistCount": 0,
      "hinduCount": 0,
      "jewishCount": 0,
      "muslimCount": 0,
      "alcoholCount": 0,
      "caffeineCount": 0,
      "atkinsCount": 0,
      "ketoCount": 0,
      "lowcarbCount": 0,
      "lowfatCount": 0,
      "paleoCount": 0,
      "pescetarianCount": 0,
      "veganCount": 0,
      "vegetarianCount": 0
    };

    for (i = 0; i < dbRestrictData.length; i++) {
      switch (dbRestrictData[i].restriction_id) {
        case 1: restrictionsReport.eggsCount++;
          break;

        case 2: restrictionsReport.fishCount++;
          break;

        case 3: restrictionsReport.glutenCount++;
          break;

        case 4: restrictionsReport.peanutsCount++;
          break;

        case 5: restrictionsReport.shellfishCount++;
          break;

        case 6: restrictionsReport.soyCount++;
          break;

        case 7: restrictionsReport.treenutCount++;
          break;

        case 8: restrictionsReport.wheatCount++;
          break;

        case 9: restrictionsReport.celiacCount++;
          break;

        case 10: restrictionsReport.diabetesCount++;
          break;

        case 11: restrictionsReport.goutCount++;
          break;

        case 12: restrictionsReport.hypertensionCount++;
          break;

        case 13: restrictionsReport.lactoseCount++;
          break;

        case 14: restrictionsReport.buddhistCount++;
          break;

        case 15: restrictionsReport.hinduCount++;
          break;

        case 16: restrictionsReport.jewishCount++;
          break;

        case 17: restrictionsReport.muslimCount++;
          break;

        case 18: restrictionsReport.alcoholCount++;
          break;

        case 19: restrictionsReport.caffeineCount++;
          break;

        case 20: restrictionsReport.atkinsCount++;
          break;

        case 21: restrictionsReport.ketoCount++;
          break;

        case 22: restrictionsReport.lowcarbCount++;
          break;

        case 23: restrictionsReport.lowfatCount++;
          break;

        case 24: restrictionsReport.paleoCount++;
          break;

        case 25: restrictionsReport.pescetarianCount++;
          break;

        case 26: restrictionsReport.veganCount++;
          break;

        case 27: restrictionsReport.vegetarianCount++;
          break;
      }
    }

    res.render("reports", {
      title: "Reports",
      restrictionsReport: restrictionsReport,
      first_name: req.session.first_name,
      navLinkText: "Logout",
      navLinkRoute: "logout",
      navLinkId: "logout",
      burgerNavLinkId: "burger-logout"
    });

  });
});

// logout redirect
router.get("/logout", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
})
module.exports = router;