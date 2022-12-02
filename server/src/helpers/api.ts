import { type } from "os";
import axios from "axios";
const mongoose = require('mongoose');
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model('Quote', quoteSchema);
import { IQuote } from "../models/IQuote";

export const getQuotes = async() => {

    Quote.deleteMany({});
    // let data = [];
    
    await axios.get('https://api.quotable.io/quotes')
        .then((res) => {
            let data = res.data.results.sort(() => 0.5 - Math.random());
            data.forEach((element: { author: any; content: any; }) => {
                if (element.author != null && element.content != null) {
                    let item: IQuote = {
                        author: element.author,
                        content: element.content
                    }
                    Quote.create({
                        author: element.author,
                        content: element.content
                    }, (err) => console.log(err));
                }
            });
        }).catch(err => console.log(err));

}