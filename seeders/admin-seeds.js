const sequelize = require('../config/connection');
const { Admin } = require('../models');

const admindata = [
  {
    first_name: 'Everett',
    last_name: 'Griffiths',
    email: 'admin@email.com',
    password: '1234'
  }
];

const seedAdmin = () => Admin.bulkCreate(admindata, { individualHooks: true });

module.exports = seedAdmin;
