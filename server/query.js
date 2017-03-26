var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/memo-crud');

let Memo = require("./models/memoSchema.js");

function insertMemo() {
    let task1 = new Memo({
        task: 'makan',
        status: 1
    });

    let task2 = new Memo({
        task: 'tidur',
        status: 1
    });

    task1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`item 1 berhasil dimasukkan`);
    });

    task2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`item 2 sberhasil dimasukkan`);
    });
}

insertMemo()
