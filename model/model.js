class Pet {
static getAllPets() {
        let sql = `SELECT * FROM pets`;
        return sql;
    }

static getPet (){
        let sql = `SELECT * FROM pets where id= ?`;
        return sql
    }

static addNewPet (){
    let sql = `INSERT INTO pets (id, category, name, photo_url, tags, status) 
    VALUES ('1', '{\"this\" : \"jk\"}', 'yu', '{\"trial\" : []}', '{}', 'thus');`
    return sql
    }

static findById (data){
    let sql = `SELECT * FROM pets where id = ?`
    return sql
    }

static deletePet(){
    let sql = `DELETE FROM pets where id = ?`
    return sql
}
    
}

module.exports = Pet