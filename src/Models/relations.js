const MOVIE = require('./movie')
const GENRE= require('./genre');

MOVIE.belongsToMany(GENRE,{through:'movie_genre'})
GENRE.belongsToMany(MOVIE,{through:'movie_genre'})
