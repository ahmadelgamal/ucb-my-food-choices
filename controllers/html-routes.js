const router = require("express").Router();
const htmlController = require("./html-controller.js");
const withAuth = require("../utils/auth");

router.get("/", htmlController.html_index);
router.get("/signup", htmlController.html_signup);
router.get("/admin-login", htmlController.html_login);
router.get("/login", htmlController.html_login);
router.get("/profile", withAuth, htmlController.html_profile);
router.get("/favorite", withAuth, htmlController.html_favorites);
router.get("/reports", withAuth, htmlController.html_reports);
router.get("/change-email", withAuth, htmlController.html_change_email);

module.exports = router;
