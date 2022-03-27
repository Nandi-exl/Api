const User = require('../model/model')

class Controller {
static async getAllUsers(req, res){
    const data = await User.getAllUsers()
    res.status(200).json(data)
}

static async getDetailUser  (req, res){
    const id = req.params.id
    const data = await User.getDetailUser(id)
    res.status(200).json(data)
}

static async addNewUser(req, res){
    const data = req.body

    if(!data.id){
       return res.status(400).json({message : "id required"})   
    }

    const existId = await User.findById()
    let compareData = JSON.stringify(existId)

    //check data typeof 2 inputs
    // console.log(typeof existId)
    // console.log(typeof data.id)

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

    await User.addNewUser(data)
    res.status(201).json(data) 
}

static async updateUser(req, res){
    const id =  req.params.id
    const data = req.body

    const checkId = await User.findById() //object
    let idCheck = JSON.stringify(checkId)
    // console.log(idCheck)// string
    // console.log(id)//string

    for(let i = 0; i<idCheck.length; i++){
        if(idCheck[7] != id){
            res.status(404).json({message : "data not found"})
            return
        }
        break;
    }

    if(data == null){
        res.status(400).json({message : "input required"})
    }

    await User.updateUser(id, data)
    res.status(200).json(data)
}

static async deleteUser(req, res){
    const id = req.params.id
    await User.deleteUser(id)
    res.status(200).json({message : `${id}'s Pet is deleted`})
}

}

module.exports = Controller;