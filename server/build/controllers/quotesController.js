"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model("Quote", quoteSchema);
const api_1 = require("../helpers/api");
const all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let count = 50;
    if (req.query["count"]) {
        count = Number(req.query["count"]);
    }
    const quotes = yield Quote.find();
    res.status(200).send(quotes.slice(0, count));
});
const generate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, api_1.getQuotes)();
    res.status(200).send();
});
const getRandomQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quotes = yield Quote.find();
    const random = Math.floor(Math.random() * quotes.length);
    res.status(200).send(quotes[random]);
});
module.exports = {
    all,
    generate,
    getRandomQuote,
};
