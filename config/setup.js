const connection = require('./db')

class dataBaseManipulation {
static connectDatabase() {
        connection.connect((err) => {
        if (err) throw console.log("data base not connected");
        console.log("database connected")
        })
    }

static createTablePets() {
    let sql = `CREATE TABLE if not exists user (
                id INT(10) NOT NULL PRIMARY KEY, 
                userName VARCHAR(255), 
                firstName VARCHAR(255),
                lastName VARCHAR(255),
                email VARCHAR(255),
                password VARCHAR(255),
                phone VARCHAR(255),
                userStatus int(10)
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