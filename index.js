var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), function() {
    console.log("Started server at port " + app.get('port'))
});