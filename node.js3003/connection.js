import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'server',
    user: 'root',
    password: '12345',
    database: 'db'
})

connection.connect(console.log("conectou"))

export default connection