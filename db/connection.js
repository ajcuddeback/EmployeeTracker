const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employee',
password: 'password',
});
 
module.exports = connection;