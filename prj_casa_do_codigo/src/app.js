var express = require('express');
var app = express();
var port_number = 3000;
var host_ip = 'localhost';

app.set('view engine', 'ejs');

app.get('/produtos', function(req, res) {
    res.render("produtos/lista");
});

app.get('/', function(req, res){
    res.render("home/index");
})

app.listen(port_number, host_ip, function() {
    console.log("Server running ...");
});