const {Datatypes} =require('sequelize')

const sequelize = require('../db')

const Movie = sequelize.define("movie", {
  id: {
    type: Datatypes.UUID,
    defaultvalue: Datatypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Datatypes.STRING,
    allowNull: false
  },
  comment: {
    type: Datatypes.STRING,
    allowNull: false
  },
  image: {
    type: Datatypes.STRING,
    allowNull: false
  }
});
module.exports = Movie