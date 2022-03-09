'use strict';
const User = require("./user")
const Product = require("./product")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")


const {
    Model
} = require('sequelize');

class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here

    }
}

Basket.init({
    user_Id: DataTypes.INTEGER,
    product_Id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Basket',
});
// Basket.hasMany(User,{foreignKey:"user_Id"})
Basket.hasOne(Product,{foreignKey:"id"})
// Basket.belongsTo(User,{foreignKey:"user_Id"})

module.exports = Basket