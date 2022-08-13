const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Genre = sequelize.define("genre", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
 
}});

module.exports =Genre