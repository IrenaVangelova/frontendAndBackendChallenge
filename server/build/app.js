"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./helpers/api");
const mongoose = require('mongoose');
const quotesRouter = require('./routes/quotes');
const app = (0, express_1.default)();
const port = 3000;
// app.use(json());
mongoose.connect("mongodb://localhost:27017/Quotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
app.use('/quotes', quotesRouter);
(0, api_1.getQuotes)();
app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
