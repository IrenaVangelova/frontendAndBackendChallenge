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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuotes = void 0;
const axios_1 = __importDefault(require("axios"));
const mongoose = require('mongoose');
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model('Quote', quoteSchema);
const getQuotes = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Quote.deleteMany({});
    yield axios_1.default.get('https://api.quotable.io/quotes')
        .then((res) => {
        let data = res.data.results.sort(() => 0.5 - Math.random()).slice(0, 20);
        data.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
            if (element.author != null && element.content != null) {
                let item = {
                    author: element.author,
                    content: element.content
                };
                const quote = new Quote({
                    author: element.author,
                    content: element.content,
                });
                yield quote.save();
            }
        }));
    }).then(() => console.log('server log --> Data successfuly fetched')).catch(err => console.log(err));
});
exports.getQuotes = getQuotes;
