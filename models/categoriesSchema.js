var mongoose = require("mongoose");

const Schema = mongoose.Schema;
let categoriesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageurl: { type: String, required: true },
});

module.exports = mongoose.model("Category", categoriesSchema);