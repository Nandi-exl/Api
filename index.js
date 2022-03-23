require("dotenv").config()

//activating database
const activeDataBaseFunction = require('./config/setup')


const router = require('./router/router')
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/', router)




//connecting database mysql and running server 
app.listen(port, () => {
    console.log(`app is running on localhost ${port}`)
})