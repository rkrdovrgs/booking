var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['pros']);

//Get all articles
router.get('/pros', function (req, res, next) {
    db.pros.find({
        name: { $regex: new RegExp(`.*${req.query.searchTerm}.*`, "i") }
    }, function (err, pros) {
        if (err) return res.send(err);
        res.json(pros);
    });
});

// Get article by id
router.get('/pros/:friendlyId', function (req, res, next) {
    db.pros.findOne({
        friendlyId: req.params.friendlyId
    }, function (err, pro) {
        if (err) return res.send(err);
        res.json(pro);
    });
});

module.exports = router;