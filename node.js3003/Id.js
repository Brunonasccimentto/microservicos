import createConnection from "./connection.js"
import express from "express"
import cors from 'cors';

var PORT = 3003
const app = express()

app.use(cors())

const connection = createConnection()

app.get('/cliente/buscar/id/:id', (req, res) => {
  let id = req.params.id
  const query = `SELECT idcliente, nome, telefone, email, logradouro, numero, complemento, bairro, cidade, uf, cep, tc.tipo FROM cliente
  INNER JOIN tipo_cliente tc 
  ON cliente.idtipo_cliente = tc.idtipo_cliente 
  WHERE idcliente = ${id}`

  connection.query(query, (err, result) => {
    if (err) {
     
      return res.status(501).send([{ data: result, err: err.message, status: 501 }])
    } 
    
    res.status(200).send([{ data: result, status: result.length > 0 ? 200 : 400 }])
  })
})

app.listen(PORT, () => console.log('rodando porta 3003'))
