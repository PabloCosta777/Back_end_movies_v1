const {Datatypes} =require('sequelize')
const { toDefaultValue } = require('sequelize/types/utils')

const sequelize = require('../db')

const User =sequelize.define('user',{
    id:{
        type: Datatypes.UUID,
        defaultvalue: Datatypes.UUIDV4,
        allowNull: false ,
        primaryKey: true 
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false
    },
    email:{
        type: Datatypes.STRING,
        allowNull: false
    },
    password:{
        type: Datatypes.STRING,
        allowNull: false
    },
    isAdmin:{
        type: Datatypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = User
