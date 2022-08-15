const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Actor = sequelize.define("actor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Actor;






/*
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsOfLife:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperament:{
      type: DataTypes.STRING,
    },
  });
};*/
