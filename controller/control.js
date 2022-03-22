const Pet = require('../model/model')

class Controller {
static getAllPets(req, res){
    console.log("All pets is called")
    res.status(200).json(Pet.getAllPets())
    }
}

module.exports = Controller;