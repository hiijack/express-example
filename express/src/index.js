/**
 * 
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('webcontent')); // for static files 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/hello', function(req, res) {
	var result = {
		"name" : "test"
	};
	res.json(result);
});

app.post('/expense/add', function(req, res) {
	console.log(req.body);
	res.send(true);
});

var server = app.listen(3000, function() {
	console.log('listening on port %d', server.address().port);
});