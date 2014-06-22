var http = require('http');
var fs   = require("fs");
var queryString = require("querystring");
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
  } else if (request.url == "/messages") {
    var fullBody = '';
    request.on('data', function(chunk) {
      fullBody += chunk.toString();
      var parsedMessage = queryString.parse(fullBody)
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(parsedMessage.message);
    });
    
    
    console.log(fullBody)
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end("404");
  }
}).listen(1337, '127.0.0.1');

console.log("Webserver Started")
