const router = require("express").Router();
const getMovies =require('../Controllers/movies')
const def = require("../Helpers/defaultResponse");

router.get("/:id", getMovies);
router.get("/", getMovies);
router.post('/', def);
router.patch("/:id",def);



module.exports = router;
