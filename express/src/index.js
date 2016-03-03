/**
 * 
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Expense = require('./model/expense');

app.use(express.static('webcontent')); // for static files
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.get('/expense/query', function(req, res, next) {
    Expense.aggregate({
        $group: {
            _id: "$time",
            money: {
                $sum: "$money"
            }
        }
    }).exec(function(err, data) {
        if (err) {
            return next(err);
        }
        console.log(data);
        res.send(data);
    });
});

app.post('/expense/add', function(req, res) {
    // TODO validate
    console.log(req.body);
    var exp = new Expense();
    exp.money = parseFloat(req.body.money);
    exp.comment = req.body.comment;
    exp.time = req.body.time;
    exp.save(function(err) {
        if (err) {
            console.log('add expense fail');
            res.send(false);
        }
        res.send(true);
    });
});

app.listen(3000);