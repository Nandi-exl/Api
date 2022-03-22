const express = require('express')
const router = express.Router()
const Controller = require('../controller/control')
const Pet = require('../model/model')


router.get('/', Controller.getAllPets)


module.exports = router;