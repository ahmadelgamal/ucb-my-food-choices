const seedUsers = require('./user-seeds');
const seedRestrictions = require('./restriction-seeds');;
const seedProfiles = require('./profile-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedRestrictions();
  console.log('--------------');

  await seedProfiles();
  console.log('--------------');

  process.exit(0);
};

seedAll();