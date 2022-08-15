const {findAllMovies,findByPk}= require('../Services/movies')
module.exports=async(req,res)=>{
    const id = req.params.id
    if(id){
        const response = await findByPk(id)

        res.send(response)
    }
    else{const response = await findAllMovies()
        res.send(req.token);
    }
    
    
}