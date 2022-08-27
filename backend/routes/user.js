const express = require("express")
const auth = require('../middelwares/authentication')
const router = express.Router();
const user = require('../controllers/user')
router.post('/register', user.register )
router.post('/login', user.login )
router.get('/getUser', auth , user.getUser)
module.exports = router;
