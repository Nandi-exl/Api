const express = require('express')
const router = express.Router()
const Controller = require('../controller/control')


router.get('/', Controller.getAllPets)


module.exports = router;