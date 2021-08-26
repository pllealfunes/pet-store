var express = require('express');
var formRouter = express.Router();
var items = require('../models/itemsSchema');
var multer = require('multer');
var photoController = require('../controllers/photoController');

var upload = multer({ storage: photoController.storage, fileFilter: photoController.imageFilter })

formRouter.get('/', function (req, res, next) {
    res.render('form', { formtitle: "Add New Item" });
});

formRouter.post('/', upload.single('image'), function (req, res, next) {
    const photo = "/images/" + req.file.filename;
    let newItem = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        instock: req.body.instock,
        imageurl: photo
    };
    let item = new items(newItem);
    item.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            if (err) {
                console.log(err);
            }
        })
});


module.exports = formRouter;