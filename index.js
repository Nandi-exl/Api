require("dotenv").config()

//activating database
const activeDataBaseFunction = require('./config/setup')


const router = require('./router/router')
const express = require('express');
const app = express()
const port = process.env.PORT || 3000

const connection = require('./config/db')

app.use('/', router)

// app.get('/', (req, res) => {
//     let sql = "SELECT * FROM pets";
//     connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result)
//         res.send(result)
//     })
// })



//connecting database mysql and running server 
app.listen(port, () => {
    console.log(`app is running on localhost ${port}`)
})