const router = require("express").Router();
const def = require('../Helpers/defaultResponse')
const register =require('../Controllers/register')
const loggin =require('../Controllers/loggin')

router.post('/register',register);
router.get('/loggin',loggin)


module.exports = router;
