var mongoose = require("mongoose");

const Schema = mongoose.Schema;
let itemsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    instock: { type: Number, required: true },
    imageurl: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

itemsSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    } else {
        this.updatedAt = new Date();
    }
    next();
});

module.exports = mongoose.model("Item", itemsSchema);