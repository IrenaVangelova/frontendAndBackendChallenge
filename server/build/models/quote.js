"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.quoteSchema = new mongoose_1.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
