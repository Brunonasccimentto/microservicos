const express = require('express');
const multer = require('multer');
const createConnection = require('./dbconexao');
const upload = multer();
const router = express.Router();

const db = createConnection()

router.get('/cliente/buscar/email/:email', (req, res) => {
  const { email } = req.params;
  const sql = `SELECT idcliente, nome, telefone, email, logradouro, numero, complemento, bairro, cidade, uf, cep, tc.tipo FROM cliente
  INNER JOIN tipo_cliente tc 
  ON cliente.idtipo_cliente = tc.idtipo_cliente 
  WHERE email = ?`;

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(501).send([{ data: result, err: err.message, status: 501 }])
    };

    res.status(200).send([{ data: result, status: result.length > 0 ? 200 : 404 }])
  });
});

module.exports = router;
