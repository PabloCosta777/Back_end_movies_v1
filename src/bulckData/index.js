const genre =require('../Models/genre')
const movie =require('../Models/movie')
const {bullCategories}= require('../bulckData/categories')
const bulkMovie = require('./movies')
module.exports=async()=>{
    genre.bulkCreate(bullCategories)
    for (item of bulkMovie){
        const pelicula = await movie.create({title:item.title,comment:item.description,image:item.poster})
        await pelicula.addGenres(item.category)
        
    }
}