'use strict';
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Warehouse extends Model {
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

Warehouse.init({
    product_Id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'Warehouse',
});
module.exports = Warehouse