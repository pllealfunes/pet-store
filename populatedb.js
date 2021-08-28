#! /usr/bin/env node

console.log('This script populates your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');


// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Item = require('./models/itemsSchema')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = []



function itemCreate(name, description, category, price, instock, imageurl, createdAt, updatedAt, cb) {
    itemdetail = {
        name: name,
        description: description,
        category: category,
        price: price,
        instock: instock,
        imageurl: imageurl,
        createdAt: createdAt,
        updatedAt: updatedAt
    }
    if (description != false) itemdetail.description = description

    var item = new Item(itemdetail);
    item.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Item: ' + item);
        items.push(item)
        cb(null, item)
    });
}


function createItems(cb) {
    async.parallel([
        function (callback) {
            itemCreate('Mouse', 'Cute mouse for cats to chase', "Cat Toys", "2", "20", "/images/cat-mouse-toy-photo.jpg", "Aug 28", "Aug 28",
                callback);
        },
        function (callback) {
            itemCreate('Bone', 'A warm bed for a good boy', "Dog Beds", "2", "20", "/images/dog-bed-photo.jpg", "Aug 28", "Aug 28",
                callback);
        }

    ],
        // optional callback
        cb);
}



async.series([
    createItems
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Items: ' + items);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });