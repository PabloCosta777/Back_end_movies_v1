const router = require("express").Router();
const def = require('../Helpers/defaultResponse')

router.post('/register',def);
router.get('/loggin',def)


module.exports = router;
