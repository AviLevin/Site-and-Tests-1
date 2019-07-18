var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '378378',
    database: 'sakila'
})

module.exports = connection;
