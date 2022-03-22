const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Rikimaru354',
    database : 'Api_Assignment'
})






module.exports = connection;
