'use strict';
const Product = require("./product")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        // Category.belongsTo(models.Product,{foreignKey:"product_Id"})

    }
}
Category.init({
    product_Id: DataTypes.INTEGER,
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Category',
});
// Category.associate(Product)
module.exports = Category
