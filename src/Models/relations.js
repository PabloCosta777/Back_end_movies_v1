const MOVIE = require('./movie')
const ACTOR = require('./actor');
const GENRE= require('./genre');

MOVIE.belongsToMany(ACTOR,{through : 'movie_actor'})
ACTOR.belongsToMany(MOVIE,{through : 'movie_actor'});

MOVIE.belongsToMany(GENRE,{through:'movie_genre'})
GENRE.belongsToMany(MOVIE,{through:'movie_genre'})
