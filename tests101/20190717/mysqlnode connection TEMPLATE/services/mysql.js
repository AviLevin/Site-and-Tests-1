var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '378378',
    database: 'countries10'
})

module.exports = connection;
