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

// host: "192.168.1.3",
// port: 3306,
// user: "root",
// password: "12345",
// database: "pessoas"