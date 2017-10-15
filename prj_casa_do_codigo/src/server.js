var http = require('http'); 
var port_number = 3000;
var host_ip = 'localhost';

var server = http.createServer(function (request, response) {
    console.log("Receiving request ...");
    if (request.url == "/produtos") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end("<!DOCTYPE html><html><head><meta lang=\"pt-BR\"><meta charset=\"utf-8\"><title>Produtos</title></head><body><h1>Listando os produtos...</h1></body></html>");
    } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end("<!DOCTYPE html><html><head><meta lang=\"pt-BR\"><meta charset=\"utf-8\"><title>Casa do Código</title></head><body><h1>Home da casa do código</h1></body></html>");
    }
});

server.listen(port_number, host_ip);

console.log("Server running at http://" + host_ip + ":" + port_number + "/");