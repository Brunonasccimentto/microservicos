const createConnection = require("../connection/mysql")

const connection = createConnection()

const formController = {

    getClients: function(req, res){
        
        const query = `SELECT idcliente, nome FROM cliente`

        connection.query(query, (err, rows)=>{
            if (err) {
                return res.status(501).send([{ data: rows, err: err.message, status: 501 }])
              };
          
              res.status(200).send([{ data: rows, status: 200 }])
        })
    }  
}

module.exports = formController