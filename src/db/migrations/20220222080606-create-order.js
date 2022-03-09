'use strict';
const {DataTypes} =require("sequelize")
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id:{
        type:DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Users",
          key:"id"
        }
      },
      basket_Id: {
        type:DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Baskets",
          key:"id"
        },
        onDelete:"cascade"
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
    await queryInterface.dropTable('Orders');
  }
};