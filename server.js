var http = require('http');
var url  = require("url");
var pg   = require("pg");
var fs   = require('fs');


http.createServer(function (req, res) {
  urlInfo = url.parse(req.url, true)
  switch (urlInfo.pathname) {
  case "/":
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync("index.html", "utf8")
    res.end(html);
  case "/client.js":
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    var js = fs.readFileSync("client.js", "utf8")
    res.end(js);
  case "/hello":
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found\n');
  }
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
