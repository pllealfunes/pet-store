var express = require('express');
var router = express.Router();
var items = require('../models/itemsSchema');

/* GET home page. */

router.get('/', (req, res, next) => {
  items.find({})
    .then((items) => {
      res.render('index', {
        items: items
      });
    })
    .catch((err) => {
      if (err) {
        res.end("ERROR!");
      }
    });
});

module.exports = router;
