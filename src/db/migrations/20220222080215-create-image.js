'use strict';
const {DataTypes} = require("sequelize")
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product_Id: {
        type:DataTypes.INTEGER,
        foreignKey:true,
        references:{
          model:"Products",
          key:"id",
        },
        onDelete:"cascade"

      },
      name: {
        type: DataTypes.STRING
      },
      path: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('Images');
  }
};