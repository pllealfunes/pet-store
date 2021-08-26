var express = require('express');
var categoryRouter = express.Router();
var items = require('../models/itemsSchema');

/* GET products by category. */
categoryRouter.get('/:category', (req, res, next) => {
    items.find({
        'category': req.params.category
    })
        .then((category) => {
            res.render('category', { category: category, title: req.params.category })
        })
        .catch((err) => {
            if (err) {
                res.end("ERROR!");
            }
        });
});

module.exports = categoryRouter;