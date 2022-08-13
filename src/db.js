require ('dotenv').config()
const {Sequelize} =require ('sequelize')

// Credenciales //
const {} = process.env

//Conexion  a la Base de Datos

const DB = new Sequelize()

module.exports = DB

