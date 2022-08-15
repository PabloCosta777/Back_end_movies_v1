const verifyToken = require('../Middleware/auth')
const router = require("express").Router();
const movieRouter=require('./movies')
const userRouter = require("./users");
const authRouter = require("./auth");

router.use("/auth", authRouter);
router.use('/movies',verifyToken, movieRouter);
router.use('/users',verifyToken, userRouter);

module.exports = router;
