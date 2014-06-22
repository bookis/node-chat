var http = require('http');
var fs   = require("fs");
// socket.io

http.createServer(function (request, response) {
  if (request.url == "/") {
    fs.readFile("index.html", "utf8", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    });
  } else if (request.url == "/messages.json") {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end("{a: 'b'}");
  }
}).listen(1337, '127.0.0.1');

console.log("Webserver Started")
