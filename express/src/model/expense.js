var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Expense = new Schema({
    id: ObjectId,
    money: Number,
    comment: String,
    time: String
});

module.exports = mongoose.model('Expense', Expense);