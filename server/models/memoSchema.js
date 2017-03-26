var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/memo-crud");
autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var memoSchema = mongoose.Schema({
    memoId: Number,
    task: String,
    status: Boolean
});

memoSchema.plugin(autoIncrement.plugin, {
    model: 'memoSchema',
    field: 'memoId'
});

var Memo = mongoose.model('Memo', memoSchema)
module.exports = Memo
