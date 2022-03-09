'use strict';
const Product = require("./product")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        // Image.belongsTo(Product)
    }
}

Image.init({
    product_Id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    path: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Image',
});
module.exports = Image