var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "378378"
});

  
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});



