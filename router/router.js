const express = require('express')
const router = express.Router()
const Controller = require('../controller/control')

router.get('/', Controller.getAllUsers)

router.get('/:id', Controller.getDetailUser)

router.post('/', Controller.addNewUser)

router.delete('/:id', Controller.deleteUser)

router.put('/:id', Controller.updateUser)

module.exports = router;