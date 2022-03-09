const Sequelize = require('sequelize');
const config = require("../../config/db_config")

const sequelize = new Sequelize(config);

module.exports = sequelize
