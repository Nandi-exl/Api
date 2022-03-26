const Pet = require('../model/model')
const connection = require('../config/db')

class Controller {
static async getAllPets(req, res){
    const data = await Pet.getAllPets()
    res.status(200).json(data)
}

static async getDetailPet  (req, res){
    const id = req.params.id
    const data = await Pet.getPet(id)
    res.status(200).json(data)
}

static async addNewPet(req, res){
    const data = req.body

    if(!data.id){
       return res.status(400).json({message : "id required"})   
    }

    const existId = await Pet.findById()
    let compareData = JSON.stringify(existId)

    //check data typeof 2 inputs
    console.log(existId)
    console.log(data.id)

    //cara ngecek hanya bisa melakuakn dimensional logic  
    //atau bisa dicoba menggunakan regex
    for(let i=0; i< compareData.length; i++){
        for(let j=0; j < compareData[i]; j++){
            if(compareData[i] == data.id){
                res.status(400).json({message : "id exist"})   
                return;
            }
            break;
        }
    }

    await Pet.addNewPet(data)
    res.status(201).json(data) 
}

static async updatePet(req, res){
     const id =  req.params.id
     const data = req.body
    if(data == null){
        res.status(400).json({message : "input required"})
    }
    await Pet.updatePet(id, data)
    res.status(200).json(data)

}

static async deletePet(req, res){
    const id = req.params.id
    await Pet.deletePet(id)
    res.status(200).json({message : `${id}'s Pet is deleted`})
}

}

module.exports = Controller;