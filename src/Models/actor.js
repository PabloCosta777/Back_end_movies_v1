const { Datatypes } = require("sequelize");

const sequelize = require("../db");

const Actor = sequelize.define("actor", {
  id: {
    type: Datatypes.UUID,
    defaultvalue: Datatypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Datatypes.STRING,
    allowNull: false
  }
});

module.exports = Actor;
