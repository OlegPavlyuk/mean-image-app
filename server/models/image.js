const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('image', imageSchema, 'images');