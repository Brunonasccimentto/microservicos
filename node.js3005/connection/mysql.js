require('dotenv').config();
const mysql = require("mysql2")

function createConnection(){
    const connection = mysql.createConnection({
        host: `${process.env.DB_HOST}`,
        port: `${process.env.DB_PORT}`,
        user: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_DATABASE}`
    })
    
    connection.connect((err)=>{
        if(err) {
            console.error("error to connect database")
            return
        } 
        console.log("connected to database")
    })

    setInterval(()=>{
        connection.ping((err)=> {
            if(err) {
                console.error("Error when pinging")
                return
            }

            console.log("Ping")
        })
    }, 3600000)

    return connection
}

module.exports = createConnection


// host: "192.168.1.3",
// port: 3306,
// user: "root",
// password: "12345",
// database: "pessoas"

// host = containers-us-west-200.railway.app
// database = railway
// port = 5922
// user = root
// password = SbcMItrlmP8RqKHOylDC