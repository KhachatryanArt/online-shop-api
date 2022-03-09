'use strict';
const {DataTypes} = require("sequelize")

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        min:8
      },
      // role: {
      //   type: DataTypes.STRING,
      //   foreignKeyConstraint:true
      // },
      // actual_balance: {
      //   type: DataTypes.INTEGER,
      //   foreignKeyConstraint: true
      // },
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
    await queryInterface.dropTable('Users');
  }
};