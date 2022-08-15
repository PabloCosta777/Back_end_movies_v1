const movies =require('../Models/movie')
const genres =require('../Models/genre')
module.exports={
    findAllMovies:async()=>{
        const response = await movies.findAll()
        return response
    },
    findByPk:async(id)=>{
        const response = await movies.findByPk(id, {
          include: {
            model: genres,
            attributes: ["name"],
            through: {
              attributes: []
            }
          }
        });
        return response 
    },
    findByGenre:async(genre)=>{},
    deleteMovie:async(id)=>{
     await movies.destroy({where:{id}})
     
    },
    editMovie:async(id)=>{}

}