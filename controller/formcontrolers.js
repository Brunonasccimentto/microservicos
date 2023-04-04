const connection = require("../connection/mysql")

const formController = {

    find: function (req, res){

        const value = req.params.value
        const query = `SELECT * FROM clientes WHERE idcliente= "${value}" OR email= "${value}"`

        connection.query(query, (err, rows)=>{
            if (rows.length < 1){
                res.status(404).send("Cliente não encontrado") 
                return
            } 
 
            res.status(200).json(rows)         
        }) 
    },
    getTypes: function (req, res){

        const query = `SELECT * FROM tipo_cliente`

        connection.query(query, (err, rows)=>{
            if (err) throw err; 
            res.status(200).send(rows)
        })
    },
    register: function(req, res){

        const {nome, telefone, email, logradouro, numero, complemento, bairro, cidade, uf, cep, idtipo_cliente} = req.body
        const client = {nome, telefone, email, logradouro, numero, complemento, bairro, cidade, uf, cep, idtipo_cliente}
        const query = `INSERT INTO clientes SET ?`

        connection.query(query, client, (err, output)=>{
            if (err){
                res.status(400).send("Preencha todo o formulário para enviar" + " " + err) 
                return
            } 
            res.status(200).send("Cliente cadastrado com sucesso!")
        })
    }
     
}

module.exports = formController