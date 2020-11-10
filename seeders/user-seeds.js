const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    first_name: 'Everett',
    last_name: 'Griffiths',
    email: 'admin@email.com',
    password: '1234'
  },
  {
    first_name: 'Ahmad',
    last_name: 'El Gamal',
    email: 'ahmad@email.com',
    password: '1234'
  },
  {
    first_name: 'Brian',
    last_name: 'Lopez',
    email: 'brian@email.com',
    password: '1234'
  },
  {
    first_name: 'Annie',
    last_name: 'AreYouOK',
    email: 'annie@email.com',
    password: '1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;