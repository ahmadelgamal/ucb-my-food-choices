const router = require("express").Router();
const htmlController = require("./html-controller.js");
const withAuth = require("../utils/auth");

router.get("/", htmlController.html_index);
router.get("/login", htmlController.html_login);
router.get("/signup", htmlController.html_signup);
router.get("/profile", withAuth, htmlController.html_profile);
router.get("/reports", withAuth, htmlController.html_reports);

module.exports = router;
