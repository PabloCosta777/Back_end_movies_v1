const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Movie = sequelize.define("movie", {
  id: {
    type: DataTypes.UUID,
    defaultvalue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
module.exports = Movie;
