'use strict';
const {DataTypes}=require("sequelize")
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Wallets', {
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
      minus_balance: {
        type: DataTypes.INTEGER
      },
      plus_balance: {
        type: DataTypes.INTEGER
      },
      actual_balance: {
        type: DataTypes.INTEGER
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
    await queryInterface.dropTable('Wallets');
  }
};