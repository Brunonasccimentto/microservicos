require('dotenv').config();
const mysql = require("mysql2")

// Configurando o banco de dados (esta em rede)
const db = mysql.createConnection({
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_DATABASE}`
});

// Conectando-se ao banco de dados
db.connect((err) => {
  if (err) {
    console.log(`Erro ao conectar-se ao banco de dados: ${err.message}`);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados');
  }
});

module.exports = db;
