const mongoose = require('mongoose');
const { quoteSchema } = require("../models/quote");
import express, { Application, Request, Response } from 'express';

const Quote = mongoose.model('Quote', quoteSchema);
import { getQuotes } from "../helpers/api";

const all = async (req: Request, res: Response) => {
    let count: number = Number(req.query['count']);
    const quotes = await Quote.find();
    res.status(200).send(quotes.slice(0,count));
};

const generate = async (req: Request, res: Response) => {
    await getQuotes();
    res.status(200).send();
};

const getRandomQuote = async (req: Request, res: Response) => {
    const quotes = await Quote.find();

    const random = Math.floor(Math.random() * quotes.length);

    res.status(200).send(quotes[random]);
}

module.exports = {
    all,
    generate,
    getRandomQuote
};