const router = require('express').Router();
const apiRoutes = require("./api");
const htmlRoutes = require('./html-routes.js');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// html error 404 route
router.use((req, res) => {
  res.status(404).render("404", { title: "404", navLinkText: "Login", navLinkRoute: "", navLinkId: "login", burgerNavLinkId: "burger-login" });
});

module.exports = router;