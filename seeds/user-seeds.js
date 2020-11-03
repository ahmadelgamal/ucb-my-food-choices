const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    first_name: 'Admin',
    last_name: 'Admin',
    email: 'admin@email.com',
    password: 'password123'
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'user@email.com',
    password: 'password123'
  },
  {
    first_name: 'Annie',
    last_name: 'AreYouOK',
    email: 'annie@email.com',
    password: 'password123'
  },
  {
    first_name: 'Indiana',
    last_name: 'Jones',
    email: 'jones@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;