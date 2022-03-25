const express = require('express')
const router = express.Router()
const Controller = require('../controller/control')

router.get('/', Controller.getAllPets)

router.get('/:id', Controller.getDetailPet)

router.post('/', Controller.addNewPet)

router.delete('/:id', Controller.deletePet)

router.put('/:id', Controller.updatePet)

module.exports = router;