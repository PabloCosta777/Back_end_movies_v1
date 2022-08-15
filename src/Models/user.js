const {DataTypes} =require('sequelize')

const sequelize = require('../db')

const User =sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true 
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = User
