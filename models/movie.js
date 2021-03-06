const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    description: String,
    text: String,
    color: String,
    position: String,
    image: String
});

module.exports = mongoose.model('Image', imageSchema);
