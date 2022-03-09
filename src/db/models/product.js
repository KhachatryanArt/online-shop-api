'use strict';
const Image = require("./image")
const Basket = require("./basket")
const Category = require("./category")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Product.hasOne(models,{foreignKey:"product_Id"})
    }
}
Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Product',
});
Product.associate(Category)
Product.hasOne(Image,{foreignKey:"product_Id"});
// Product.hasOne(Image,{foreignKey:"product_Id"});
// Product.belongsTo(Basket,{foreignKey:"product_Id"});


module.exports = Product