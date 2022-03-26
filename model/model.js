const connection = require('../config/db')

class Pet {
static getAllPets() {
        let sql = `SELECT * FROM pets`;
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static getPet (id){
        let sql = `SELECT * FROM pets where id= ${id}`;
        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static addNewPet (data){
        const dataImput = [
            data.id,
            data.category,
            data.name,
            data.photo_url,
            data.tags,
            data.status
        ]
        let sql = `INSERT INTO pets (
                   id, 
                   category, 
                   name, 
                   photo_url, 
                   tags, 
                   status) 
                   VALUES  (?, ?, ?, ?, ?, ?)`
        return new Promise((resolve, reject) => {
            connection.query(sql, dataImput, (err, result) => {
                resolve(result)
            })
        })
    }

static findById (){
        let sql = `SELECT id FROM pets`
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static updatePet(id, data){
    const dataUpdate = [
            data.category,
            data.name,
            data.photo_url,
            data.tags,
            data.status
        ]
    let sql = `UPDATE pets
               SET 
               category= ?,
               name= ?,
               photo_url= ?,
               tags= ?,
               status = ?
               WHERE id = ${id}
             `
    return new Promise((resolve, reject) => {
        connection.query(sql, dataUpdate, (err, result) => {
            resolve(result)
        })
    })
}

static deletePet(id){
    let sql = `DELETE FROM pets WHERE id = ${id}`
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            resolve(result)
        })
    })
}
    
}

module.exports = Pet