const connection = require('../config/db')

class Pet {
static getAllPets() {
        let sql = `SELECT * FROM pets`;
        return sql
    }

static getPet (){
        let sql = `SELECT * FROM pets where id= ?`;
        return sql
    }

static addNewPet (){
        let sql = `INSERT INTO pets (
                   id, 
                   category, 
                   name, 
                   photo_url, 
                   tags, 
                   status) 
                   VALUES  (?, ?, ?, ?, ?, ?)`
        return sql
    }

static findById (){
        let sql = `SELECT id FROM pets WHERE id >= 0`
        return sql
    }

static updatePet(){
    let sql = `UPDATE pets
               SET 
               category= ?,
               name= ?,
               photo_url= ?,
               tags= ?,
               status = ?
               WHERE id = ?
             `
    return sql
}

static deletePet(){
    let sql = `DELETE FROM pets WHERE id = ?`
    return sql
}
    
}

module.exports = Pet