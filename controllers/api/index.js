const router = require('express').Router();

const userRoutes = require('./user-routes');
const restrictionRoutes = require('./restriction-routes');
const profileRoutes = require('./profile-routes');

router.use('/users', userRoutes);
router.use('/restrictions', restrictionRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;