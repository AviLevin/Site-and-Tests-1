var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });



  
fs.appendFile('mynewfile1.js', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



  fs.appendFile('mynewfile1.js', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  fs.unlink('mynewfile1.js', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });


}).listen(8080);