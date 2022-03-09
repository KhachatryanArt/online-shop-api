'use strict';
const Basket = require("./basket")

const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Order.belongsTo(Basket)
    }
}

Order.init({
    user_id: DataTypes.INTEGER,
    basket_Id: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Order',
});

module.exports = Order