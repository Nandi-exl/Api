const connection = require('./db')

class dataBaseManipulation {
static connectDatabase() {
        connection.connect((err) => {
        if (err) throw console.log("data base not connected");
        console.log("database connected")
        })
    }

static createTablePets() {
    let sql = `CREATE TABLE if not exists Pets (
                id INT(10) NOT NULL PRIMARY KEY, 
                category JSON, 
                name VARCHAR(255),
                photo_url JSON,
                tags JSON,
                status VARCHAR(255)
            )`
    connection.query(sql, function (err) {
    if (err) throw err;
    console.log("Table created")})
    }

}

const activeDataBaseFunction = [
    dataBaseManipulation.connectDatabase(), 
    dataBaseManipulation.createTablePets()
]


module.exports = activeDataBaseFunction;