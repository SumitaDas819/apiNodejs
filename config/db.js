const mysql = require('mysql');
const dotenv = require('dotenv').config({ path: './config/.env' })
//helps to read data form .env file
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_NAME)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:process.env.MY_SQLDB
})
connection.connect((error) => {
    if (error) throw error
    console.log("connection successfull")
})

module.exports = connection;