const Pet = require('../model/model')
const connection = require('../config/db')

class Controller {
static getAllPets(req, res){
    console.log("All pets is called")
    connection.query(Pet.getAllPets(), (err, result) => {
        if (err) throw err;
            res.status(201)
            res.send(result)
        })
    }
}

module.exports = Controller;