require('dotenv').config();
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    user: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`
})

connection.connect((err)=>{
    if(err) throw err
    console.log("connected to database")
})

module.exports = connection