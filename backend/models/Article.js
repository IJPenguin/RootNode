const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    description: { type: String, required: true },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);