require('dotenv').config();
const mysql = require("mysql2")

// Configurando o banco de dados (esta em rede)
function createConnection() {
    const db = mysql.createConnection({
        host: `${process.env.DB_HOST}`,
        port: `${process.env.DB_PORT}`,
        user: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_DATABASE}`
    })

    db.connect((err) => {
        if (err) {
            console.error("error to connect database")
            return
        }
        console.log("connected to database")
    })

    setInterval(() => {
        db.ping((err) => {
            if (err) {
                console.error("Error when pinging")
                return
            }

            console.log("Ping")
        })
    }, 3600000)

    return db
}

module.exports = createConnection
