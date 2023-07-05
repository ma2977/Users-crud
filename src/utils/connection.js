const { Sequelize } = require('sequelize');
const database = 'usersfinal_db';
require('dotenv').config();
//const sequelize = new Sequelize(process.env.DATABASE_URL)
const sequelize = new Sequelize(database, null, null, { dialect: 'postgres' });
module.exports = sequelize;
