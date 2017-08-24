var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var favicon = require('serve-favicon');
var path = require("path");

app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.set('port', process.env.PORT || 5050);
console.log('Env:' + process.env.NODE_ENV);

app.listen(app.get('port'), function() {
    console.log("Started server at port " + app.get('port'))
});