const connection = require('../config/db')

class User {
static getAllUsers() {
        let sql = `SELECT * FROM user`;
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static getDetailUser (id){
        let sql = `SELECT * FROM user where id= ${id}`;
        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static addNewUser (data){
        const dataImput = [
            data.id,
            data.userName,
            data.firstName,
            data.lastName,
            data.email,
            data.password,
            data.phone,
            data.userStatus
        ]
        let sql = `INSERT INTO user (
                   id, 
                   userName, 
                   firstName, 
                   lastName, 
                   email, 
                   password,
                   phone,
                   userStatus) 
                   VALUES  (?, ?, ?, ?, ?, ?, ?, ?)`
        return new Promise((resolve, reject) => {
            connection.query(sql, dataImput, (err, result) => {
                resolve(result)
            })
        })
    }

static findById (id){
        let sql = `SELECT id FROM user where id = ${id}`
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                resolve(result)
            })
        })
    }

static updateUser(id, data){
    const dataUpdate = [
            data.userName,
            data.firstName,
            data.lastName,
            data.email,
            data.password,
            data.phone,
            data.userStatus
        ]
    let sql = `UPDATE user
               SET 
               userName= ?,
               firstName= ?,
               lastName= ?,
               email= ?,
               password = ?,
               phone = ?,
               userStatus = ?
               WHERE id = ${id}
             `
    return new Promise((resolve, reject) => {
        connection.query(sql, dataUpdate, (err, result) => {
            resolve(result)
        })
    })
}


static deleteUser(id){
    let sql = `DELETE FROM user WHERE id = ${id}`
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            resolve(result)
        })
    })
}
    
}

module.exports = User