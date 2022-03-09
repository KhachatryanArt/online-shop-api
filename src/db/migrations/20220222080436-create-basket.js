'use strict';
const {DataTypes} =require("sequelize")
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_Id: {
        type:DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Users",
          key:"id"
        }
      },
      product_Id: {
        type:DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Products",
          key:"id"
        }
      },
      count: {
        type: DataTypes.INTEGER
      },
      total_amount: {
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
    await queryInterface.dropTable('Baskets');
  }
};