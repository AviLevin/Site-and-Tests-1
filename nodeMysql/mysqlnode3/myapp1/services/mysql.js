var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: '378378',
  database: 'noam_blog'
});
 
connection.connect();

module.exports = connection;