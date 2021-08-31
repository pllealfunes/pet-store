var express = require('express');
var itemRouter = express.Router();
var items = require('../models/itemsSchema');
var multer = require('multer');
var photoController = require('../controllers/photoController');
var upload = multer({ storage: photoController.storage, fileFilter: photoController.imageFilter })


/* GET users listing. */
itemRouter.get('/:itemid', function (req, res, next) {
    items.findOne({
        '_id': req.params.itemid
    })
        .then((item) => {
            res.render('item', { item: item })
        })
        .catch((err) => {
            if (err) {
                res.end("ERROR!");
            }
        });
});


itemRouter.post('/:itemid', upload.single('image'), (req, res, next) => {
    items.findOne({
        '_id': req.params.itemid
    })
        .then((item) => {
            if (req.file) {
                var data = {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    instock: req.body.instock,
                    imageurl: "/images/" + req.file.filename
                }
            } else {
                var data = {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    instock: req.body.instock
                }
            }
            item.set(data);
            item.save().then(() => {
                res.redirect(`/item/${item.id}`);
            });
        }).catch((err) => {
            if (err) console.log(err);
        });
});



itemRouter.get('/delete/:itemid', (req, res, next) => {
    items.deleteOne({
        '_id': req.params.itemid
    })
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            if (err) console.log(err);
        });
});

module.exports = itemRouter;
