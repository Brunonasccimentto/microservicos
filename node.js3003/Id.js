import connection from "./connection.js"
import express from "express"

var PORT = 3003
const app = express()

app.get('/cliente/buscar/id/:id', (req, res) => {
  let id = req.params.id
  const query = `SELECT * FROM cliente WHERE id = ${id};`

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(404).send(err)
    } else {
      res.send(result)
    }
  })
})


app.listen(PORT, () => console.log('rodando porta 3003'))
