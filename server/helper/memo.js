var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/memo-crud');
let Memo = require("../models/memoSchema.js");
const methods = {}

methods.show = function (req, res) {
    Memo.find({}, function (err, result) {
        if (err) res.status(500)
            .send(err);
        res.send(result)
    })
}

methods.remove = function (req, res) {
    Memo.findOneAndRemove({
        memoId: req.params.memoId
    }, function (err, Memo) {
        var response = {
            message: `Memo with dataId ${req.body.memoId} successfully deleted`
        };
        res.send(response);
    });
};

methods.add = function (req, res) {
    let task = new Memo({
        task: req.body.task,
        status: req.body.status
    });

    task.save(function (err, respond) {
        if (err) return console.error(err);
        res.send(task)
    });
}

methods.update = function (req, res) {
    Memo.findOneAndUpdate({
        memoId: req.params.memoId
    }, {
        $set: {
            task: req.body.task,
            status: req.body.status,
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
};

module.exports = methods;
