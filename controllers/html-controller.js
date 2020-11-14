const { Profile, User, Restriction, Admin, Favorite, UserFavorites } = require("../models");
const sequelize = require('../config/connection');

const html_index = (req, res) => {
  res.redirect("/login");
};

const html_signup = (req, res) => {
  console.log("=====GET=signup=app=======");
  res.render("signup", {
    title: "Sign Up",
    user_id: req.session.user_id,
    navLinkText: "Login",
    navLinkRoute: "login",
    navLinkId: "login",
    burgerNavLinkId: "burger-login"
  });
};

const html_login = (req, res) => {
  console.log("=====GET=login=app=====");

  if (req.session.guestLoggedIn) {
    res.redirect("/profile");
    return;
  }
  if (req.session.hostLoggedIn) {
    res.redirect("/reports");
    return;
  }

  res.render("login", {
    title: "Login",
    user_id: req.session.user_id,
    navLinkText: "Sign Up",
    navLinkRoute: "signup",
    navLinkId: "signup",
    burgerNavLinkId: "burger-signup"
  });


};

const html_profile = (req, res) => {
  console.log("=====GET=profile=app=======");
  if (req.session.guestLoggedIn) {
    Restriction.findAll({
      attributes: ["id", "restriction_name", "category"]
    }).then((dbRestrictionData) => {
      res.render("profile", {
        title: "Profile",
        first_name: req.session.first_name,
        user_id: req.session.user_id,
        restriction_data: dbRestrictionData,
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      });
    })
  }
};

const html_favorites = (req, res) => {
  console.log("=====GET=favorites=app=======");
  if (req.session.guestLoggedIn) {
    Favorite.findAll({
      attributes: ["id", "food_name", "food_category"]
    }).then((dbFavoriteData) => {

      res.render("userfav", {
        title: "Favorites",
        favorite_data: dbFavoriteData,
        first_name: req.session.first_name,
        user_id: req.session.user_id,
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      });
    })
  }
};

const html_reports = (req, res) => {
  console.log("====GET=REPORT====");
  if (req.session.hostLoggedIn) {
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
        user_id: req.session.user_id,
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      });

    });
  }
};

const html_change_email = (req, res) => {
  if (req.session.guestLoggedIn) {
    User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      }
    }).then((userData) => {

      res.render("changeEmail", {
        title: "Change Email",
        first_name: req.session.first_name,
        user_id: userData.id,
        loggedIn: "guestLoggedIn",
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      })
    })
  }
  if (req.session.hostLoggedIn) {
    Admin.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      }
    }).then((adminData) => {

      res.render("changeEmail", {
        title: "Change Email",
        first_name: req.session.first_name,
        user_id: adminData.id,
        loggedIn: "hostLoggedIn",
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      })
    })
  }
}

const html_change_pw = (req, res) => {
  console.log(req.session.guestLoggedIn);
  console.log(req.session.hostLoggedIn);
  if (req.session.guestLoggedIn) {
    User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      }
    }).then((userData) => {

      res.render("changePassword", {
        title: "Change Password",
        first_name: req.session.first_name,
        user_id: userData.id,
        loggedIn: "guestLoggedIn",
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      })
    })
  }
  if (req.session.hostLoggedIn) {
    Admin.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      }
    }).then((userData) => {

      res.render("changePassword", {
        title: "Change Password",
        first_name: req.session.first_name,
        user_id: userData.id,
        loggedIn: "hostLoggedIn",
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      })
    })
  }
}

const html_foodfav_reports = (req, res) => {
  if (req.session.hostLoggedIn) {
    Admin.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      }
    }).then((userData) => {
      res.render("foodfavreport", {
        title: "Favorite Food report",
        first_name: req.session.first_name,
        user_id: userData.id,
        loggedIn: "hostLoggedIn",
        navLinkText: "Logout",
        navLinkRoute: "",
        navLinkId: "logout",
        burgerNavLinkId: "burger-logout"
      })
    })
  }
}

module.exports = {
  html_index,
  html_signup,
  html_login,
  html_profile,
  html_favorites,
  html_reports,
  html_change_email,
  html_change_pw,
  html_foodfav_reports
}
