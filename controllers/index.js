const router = require('express').Router();
const apiRoutes = require("./api");
const appRoutes = require('./app.js');
//const reportRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', appRoutes);
//router.use('/reports', reportRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;