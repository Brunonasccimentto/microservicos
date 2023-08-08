import dotenv from "dotenv"
import mysql from 'mysql2'

dotenv.config()
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

export default createConnection