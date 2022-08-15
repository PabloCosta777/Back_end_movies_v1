const {deleteMovie} = require('../Services/movies')
module.exports=async(req,res)=>{
    const id=req.params.id
    const isAdmin =req.token.isAdmin
    if(id && isAdmin === true){
        await deleteMovie(id);
        res.send({msj:'deleted movie'})
    }
    res.send({msg:'you do not have permission to perform that action'})

}