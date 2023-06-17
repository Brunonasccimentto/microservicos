const connection = require("../connection/mysql")

const formController = {

    getTypes: function (req, res){

        const query = `SELECT * FROM tipo_cliente`

        connection.query(query, (err, rows)=>{
            if (err) throw err; 
            res.status(200).send(rows)
        })
    }
}

module.exports = formController