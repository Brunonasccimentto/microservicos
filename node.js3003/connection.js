import dotenv from "dotenv"
import mysql from 'mysql2'

dotenv.config()

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

export default connection