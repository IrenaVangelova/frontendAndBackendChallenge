"use strict";
const mongoose = require('mongoose');
const quoteSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model('quote', quoteSchema);
