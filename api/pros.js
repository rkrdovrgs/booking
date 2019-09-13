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

// Get pro existing bookings
router.get('/pros/:friendlyId/bookings', function (req, res, next) {
    db.bookings.find({
        proFriendlyId: req.params.friendlyId
    }, function (err, bookings) {
        if (err) return res.send(err);
        res.json(bookings);
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

// Get booking confirmation by id
router.get('/booking/:bookingId', function (req, res, next) {
    db.bookings.findOne({
        _id: mongojs.ObjectId(req.params.bookingId)
    }, function (err, booking) {
        if (err) return res.send(err);
        res.json(booking);
    });
});

module.exports = router;