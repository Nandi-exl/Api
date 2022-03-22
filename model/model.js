const connection = require('../config/db')

class Pet {
static getAllPets() {
        let sql = `SELECT * FROM pets`;
        return sql;
    }
}

module.exports = Pet