const Pet = require('../model/model')
const connection = require('../config/db')

class Controller {
static getAllPets(req, res){
    console.log("All pets is called")
    connection.query(Pet.getAllPets(), (err, result) => {
        if (err) throw err;
            res.status(200)
            res.send(result)
        })
    }

static getDetailPet  (req, res){
    const id = req.params.id
    connection.query(Pet.getPet(), id, (err, result) => {
        if(err) throw err;
            res.status(200)
            res.send(result)
        })
    
    }

static addNewPet(req, res){
    const data =  req.body;
    console.log(data)
    
    const exixtingPet = Pet.findById(data.id)
    if(exixtingPet){
        res.status(400).json({message : "pet is already exist"})  
    }

    connection.query(Pet.addNewPet(), data, (err) => {
        if(err) throw err;
        res.status(201)
        console.log('adding new pet')
        })
    }

static updatePet(){

    }

static deletePet(req, res){
    const data = req.params.id
    connection.query(Pet.deletePet(), data, (err, result) => {
        if (err) throw err;
        res.status(200)
        res.send(result)
        console.log('Pet deleted')
    })
    }    
}

module.exports = Controller;