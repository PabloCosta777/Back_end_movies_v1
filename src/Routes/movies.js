const router = require("express").Router();
const getMovies = require("../Controllers/getMovies");
const deleteMovie=require('../Controllers/deleteMovie')
const updateMovie=require('../Controllers/updateMovie')
const addMOvie =require('../Controllers/addMovie')

router.get("/:id", getMovies);//done
router.get("/", getMovies); //done
router.post('/', addMOvie);
router.patch("/:id",updateMovie);
router.delete('/:id',deleteMovie) //done



module.exports = router;
