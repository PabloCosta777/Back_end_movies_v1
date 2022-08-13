const router = require("express").Router();

router.use('/auth', require('./auth'))
router.use('/movies', require('./users'));
router.use('/users', require('./users'));

module.exports = router;
