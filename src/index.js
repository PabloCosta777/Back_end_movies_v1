const app = require('./app')
const db = require('./db')
require("dotenv").config();
const PORT =process.env.PORT
const init = require('./bulckData/index')
require('./Models/relations')

app.listen(PORT,()=>{
     db.sync({force:false})
    .then(console.log('Conectado a la BBDD'))
    .then(console.log(`Escuchando en el puerto ${PORT}`))
    //.then(init())
    .catch((e)=>console.log(e))
})


