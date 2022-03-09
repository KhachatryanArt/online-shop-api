'use strict';
const Role = require("./role")
const Basket= require("./basket")
const Wallet = require("./wallet")
const Order = require("./order");
const History = require("./history")
const sequelize = require("../connection/connection")
const {DataTypes} = require("sequelize")
const {
    Model
} = require('sequelize');

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
}

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        }
    },

}, {
    sequelize,
    modelName: 'User',
});
User.hasOne(Role,{foreignKey:"user_Id"});

User.hasOne(Basket,{foreignKey:"user_Id"});

User.hasMany(History,{foreignKey:"user_Id"})
User.hasMany(Wallet,{foreignKey:"user_Id"})

module.exports = User