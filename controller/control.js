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

    const existId = await User.findById(data.id)
    console.log(existId)
    if(existId != ""){
        res.status(400).json({message : "id exist"})   
        return
    }

    // const exArr = []

    // existId.map(val => {
    //     exArr.push(val.id)
    // })

    // if(exArr.includes(Number(data.id))){
    //     res.status(400).json({message : "id exist"})   
    //     return;
    // }

    await User.addNewUser(data)
    res.status(201).json(data) 
}

static async updateUser(req, res){
    const id =  req.params.id
    const data = req.body

    const checkId = await User.findById(id) //object
    if(checkId == ""){
        res.status(404).json({message : "id not found"})
        return
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
    res.status(200).json({message : `${id}'s user is deleted`})
}

}

module.exports = Controller;