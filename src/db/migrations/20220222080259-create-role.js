'use strict';
const {DataTypes} = require("sequelize")
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Roles', {
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
      name: {
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
    await queryInterface.dropTable('Roles');
  }
};