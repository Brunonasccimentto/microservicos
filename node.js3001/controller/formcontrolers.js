const createConnection = require("../connection/mysql")

const connection = createConnection()

const formController = {

    getTypes: function (req, res){

        const query = `SELECT * FROM tipo_cliente`

        connection.query(query, (err, rows)=>{
            if (err){
                res.status(501).send([{data: rows, status: 501}])
            }; 
            res.status(200).send([{data: rows, status: 200}])
        })
    }
}

module.exports = formController