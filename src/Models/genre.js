const { Datatypes } = require("sequelize");

const sequelize = require("../db");

const Genre = sequelize.define("genre", {
  id: {
    type: Datatypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Datatypes.STRING,
    allowNull: false
 
}});

module.exports =Genre