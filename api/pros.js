var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['pros', 'bookings']);

//Get all pros
router.get('/pros', function (req, res, next) {
    db.pros.find({
        name: { $regex: new RegExp(`.*${req.query.searchTerm}.*`, "i") }
    }, function (err, pros) {
        if (err) return res.send(err);
        res.json(pros);
    });
});

// Get pro by id
router.get('/pros/:friendlyId', function (req, res, next) {
    db.pros.findOne({
        friendlyId: req.params.friendlyId
    }, function (err, pro) {
        if (err) return res.send(err);
        res.json(pro);
    });
});

// Book appointment
router.post('/pros/:friendlyId/book', function (req, res, next) {
    db.bookings.insert({
        proFriendlyId: req.params.friendlyId,
        fromUnix: req.body.fromUnix,
        contact: req.body.contact
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

module.exports = router;