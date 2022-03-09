'use strict';
const {DataTypes} = require("sequelize")
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_Id: {
        type: DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Users",
          key:"id"
        }
      },
      productName: {
        type: DataTypes.STRING,
        // references:{
        //   model:"Product",
        //   key:"name"
        // }
      },
      count: {
        type: DataTypes.INTEGER,
        // references:{
        //   model:"Basket",
        //   key:"count"
        // }
      },
      price: {
        type: DataTypes.INTEGER,
        // references:{
        //   model:"Product",
        //   key:"price"
        // }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Histories');
  }
};