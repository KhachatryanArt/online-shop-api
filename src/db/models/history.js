'use strict';
const {DataTypes} = require("sequelize");
const User = require("./user")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}

History.init({
    user_Id: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    count: DataTypes.INTEGER,
    price: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'History',
});
// History.belongsTo(User)
module.exports = History