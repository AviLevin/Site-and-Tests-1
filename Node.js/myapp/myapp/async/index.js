var http = require('http');
var fs = require('fs');


function getFile(fileName, type) {
    data = fs.readFileSync(fileName, type);
    console.log(data);
    return data;

}

async function allData() {
    var response = "";
    response += await getFile('1.html', 'utf8');
    response += await getFile('2.html', 'utf8');
    response += await getFile('2.html', 'utf8');
    response += await getFile('2.html', 'utf8');
    response += await getFile('2.html', 'utf8');
    response += await getFile('3.html', 'utf8');
    console.log(response);

    // response = response1 + response2 + response3;
    return response;
}

//create a server object:
http.createServer(function (req, res) {
    allData().then(data => {
        res.write(data); //write a response to the client
        res.end(); //end the response
    });
}).listen(3000); //the server object listens on port 8080



