var express = require('express');
var router = express.Router();
var items = require('../models/itemsSchema');

/* GET home page. */

router.get('/', (req, res, next) => {
  items.find({})
    .then((items) => {
      //const categories = [...new Set(items.map(category => category.category))]
      res.render('index', {
        items: items,
        //categories: categories
      });
    })
    .catch((err) => {
      if (err) {
        res.end("ERROR HOME!");
      }
    });
});

module.exports = router;
