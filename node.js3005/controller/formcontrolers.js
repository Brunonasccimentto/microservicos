const connection = require("../connection/mysql")

const formController = {

    getClients: function(req, res){
        const query = `SELECT * FROM cliente`

        connection.query(query, (err, rows)=>{
            if (err) throw err; 
            res.status(200).json(rows)
        })
    }  
}

module.exports = formController