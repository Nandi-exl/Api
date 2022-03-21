const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('this is new world')
})

app.listen(3000, () => {
    console.log('app is runggin')
})
