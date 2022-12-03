import { type } from "os";
import axios from "axios";
const mongoose = require('mongoose');
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model('Quote', quoteSchema);
import { IQuote } from "../models/IQuote";

export const getQuotes = async() => {

    await Quote.deleteMany({});
    await axios.get('https://api.quotable.io/quotes')
        .then((res) => {
            let data = res.data.results.sort(() => 0.5 - Math.random()).slice(0,20);
            data.forEach(async(element: { author: string; content: string; }) => {
                if (element.author != null && element.content != null) {
                    let item: IQuote = {
                        author: element.author,
                        content: element.content
                    }
                    const quote = new Quote({
                        author: element.author,
                        content: element.content,
                    });
                    await quote.save();
                }
            });
        }).then(() => console.log('server log --> Data successfuly fetched')).catch(err => console.log(err));

}