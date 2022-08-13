const router = require("express").Router();
const def = require("../Helpers/defaultResponse");

router.get('/',def);
router.post('/', (req, res)=> {
    return res.send("hello pino")
});
router.patch("/:id",def);

module.exports = router;
