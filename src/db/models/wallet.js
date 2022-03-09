'use strict';
const User = require("./user")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Wallet.belongsTo(models.User)
    }
}

Wallet.init({
    user_Id: DataTypes.INTEGER,
    minus_balance: DataTypes.INTEGER,
    plus_balance: DataTypes.INTEGER,
    actual_balance: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Wallet',
});

module.exports = Wallet;
