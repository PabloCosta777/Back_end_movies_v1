const router = require("express").Router();
const getMovies = require("../Controllers/getMovies");
const deleteMovie=require('../Controllers/deleteMovie')
const updateMovie=require('../Controllers/updateMovie')
const def = require("../Helpers/defaultResponse");

router.get("/:id", getMovies);//done
router.get("/", getMovies); //done
router.post('/', def);
router.patch("/:id",updateMovie);
router.delete('/:id',deleteMovie) //done



module.exports = router;
