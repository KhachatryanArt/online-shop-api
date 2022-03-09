'use strict';
const User = require("./user")
const {DataTypes} = require("sequelize")
const sequelize = require("../connection/connection")

const {
    Model
} = require('sequelize');

class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        // Role.belongsTo(models.User)
    }
}

Role.init({
    user_Id: DataTypes.INTEGER,
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Role',
});
// Role.hasMany(User,{foreignKey:"user_Id"})
module.exports = Role;
