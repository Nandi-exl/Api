const connection = require('../config/db')

class Pet {
static getAllPets(req, res) {
        let sql = `SELECT * FROM pets`
            connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result)
            res.send(result)
            })
    }
}

module.exports = Pet