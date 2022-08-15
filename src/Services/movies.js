const movies =require('../Models/movie')
module.exports={
    findAllMovies:async()=>{
        const response = await movies.findAll()
        return response
    },
    findByPk:async(id)=>{
        const response = await movies.findByPk(id)
        return response 
    },
    findByGenre:async(genre)=>{}
}