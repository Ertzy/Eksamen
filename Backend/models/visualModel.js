const mongoose = require('mongoose');

const visualSchema = new mongoose.Schema({
    value: {type: String},
})

const visualScreen = mongoose.model('Post', visualSchema);

module.exports = visualScreen;