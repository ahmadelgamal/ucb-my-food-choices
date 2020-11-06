const router = require('express').Router();
const apiRoutes = require("./api");
const appRoutes = require('./app.js');

router.use('/api', apiRoutes);
router.use('/', appRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;