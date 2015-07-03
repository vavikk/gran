var express = require('express');
var app     = express();
var config  = require('./server/config.js')();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.sendFile('./public/views/index.html');
});

app.listen(config.port, function() {
    console.log("Node listening on port "+ config.port);
});
