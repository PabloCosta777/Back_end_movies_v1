const jwt = require("jsonwebtoken");
require("dotenv").config();
const KEY = process.env.KEY;

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,KEY,(error,decode)=>{
        if(error){res.status(403).send({msg:'token incorrecto'})}
        else{
          req.token = decode
          next()
        }
    })
  
};
