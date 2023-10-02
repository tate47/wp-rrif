const mysql = require("mysql2");
require('dotenv').config()
const dbConfig =require("../config/db.config");
// const connection =mysql.createConnection({
//     host:'aws.connect.psdb.cloud',
//     user: '3hxqcibeh3kxhnsgkain',
//     password: 'pscale_pw_R9MKyNO7UxPZeAaaMjuERuec6h1zrmU5dJynXX0egAg',
//     database:'database-rrif',
//     ssl:{
//         rejectUnauthorized: true
//     }

// });

const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect((error)=>{
    if(error) console.log("MYSQL connection: " + error);
    else console.log("Successfully connected to the database");
});
module.exports = connection;