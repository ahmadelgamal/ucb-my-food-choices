const router = require('express').Router();

const userRoutes = require('./user-routes');
const restrictionRoutes = require('./restrict-routes');

router.use('/users', userRoutes);
router.use('/restrictions', restrictionRoutes);

module.exports = router;