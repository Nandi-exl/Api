const Pet = require('../model/model')
const connection = require('../config/db')

class Controller {
static getAllPets(req, res){
    console.log("All pets is called")
    connection.query(Pet.getAllPets(), (err, result) => {
        if (err){
            res.status(400).json({message : "Invalid URL"})
            throw err;
        } 
            res.status(200)
            res.send(result)
        })
    }

static getDetailPet  (req, res){
    const id = req.params.id

    connection.query(Pet.findById(), id, (err, result) => {
        if(id == null || id == undefined){
            res.status(400).json({message : "pet is not here"})
            res.send("id is not here")
        }
    })


    connection.query(Pet.getPet(), id, (err, result) => {
        if(err) throw err;
            res.status(200)
            res.send(result)
        })
    
    }

static addNewPet(req, res){
    const data =  [
        req.body.id, 
        req.body.category, 
        req.body.name, 
        req.body.photo_url, 
        req.body.tags, 
        req.body.status];
    
    let id = req.body.id

    if(id == null){
    res.status(400).json({message: "id required"})
    return;
    }

    connection.query(Pet.findById(), (err, result) => { 
        let newR = JSON.stringify(result)
        // console.log(newR)
        for(let i = 0; i< newR.length; i++){
            for(let j = 0; j < newR[i]; j++){
                // console.log(newR[i])
                if(newR[i] == id){
                      console.log("id already exixt")
                      res.status(400).json({message : "id exist"})
                      return;
                    }
                    break;
            }
        }
        
    connection.query(Pet.addNewPet(), data, () => {
            res.status(201).json(req.body)
            console.log('adding new pet')
        })           
    })
}


static updatePet(req, res){
     const id =  req.params.id
     const data =  [
        //  req.body.id, 
         req.body.category, 
         req.body.name, 
         req.body.photo_url, 
         req.body.tags, 
         req.body.status,
         id
    ];
    
    
    
    if(data == undefined){
        res.status(400).json({message : "input required"})
        res.end();
    }

    connection.query(Pet.updatePet(), data,  (err, result) => {
        if(err) {
            res.status(400).json({message : "data update error"})
            throw err;
        } 

        console.log("data updated")
        res.status(200).json({message : "data updated"})
    })
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