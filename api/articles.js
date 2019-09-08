var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['articles']);

//Get all articles
router.get('/articles', function (req, res, next) {
    if (!req.query.searchTerm) return res.send([]);
    db.articles.find({
        headline: { $regex: `.*${req.query.searchTerm}.*` }
    }, function (err, articles) {
        console.log(arguments);
        if (err) return res.send(err);
        res.json(articles);
    });
});

// Get article by id
router.get('/articles/:id', function (req, res, next) {
    db.articles.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, article) {
        if (err) return res.send(err);
        res.json(article);
    });
});

module.exports = router;