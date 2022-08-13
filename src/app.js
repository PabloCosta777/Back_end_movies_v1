const express = require ('express')
const express = require('express');
const logger = require('morgan');

const dotenv = require("dotenv")
dotenv.config()

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//revisar
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})
//////////////////////
app.use('/', indexRouter);


module.exports = app;
