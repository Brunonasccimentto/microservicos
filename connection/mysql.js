const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "server",
    port: 3306,
    user: "root",
    password: "12345",
    database: "db"
})

connection.connect((err)=>{
    if(err) throw err
    console.log("connected to database")
})

module.exports = connection