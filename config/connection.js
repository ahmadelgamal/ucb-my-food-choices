const Sequelize = require('sequelize');
const JAWSDB_URL = 'mysql://kxwwh7g6qfhcktq1:p0cfbvmx177lxwcr@d9c88q3e09w6fdb2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g6c3ic7bu5hejjye';

require('dotenv').config();

//create connection to our db
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;
