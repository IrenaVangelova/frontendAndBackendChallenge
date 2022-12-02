const mongoose = require('mongoose');
const { quoteSchema } = require("../models/quote");
import express, { Application, Request, Response } from 'express';

const Quote = mongoose.model('Quote', quoteSchema);
import { getQuotes } from "../helpers/api";

const all = async (req: Request, res: Response) => {
    const quotes = await Quote.find();
    res.send(
        quotes
    );
};

const generate = async (req: Request, res: Response) => {
    await getQuotes();
    res.status(200);
};

module.exports = {
    all,
    generate
};