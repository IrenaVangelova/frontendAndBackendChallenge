const mongoose = require("mongoose");
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model("Quote", quoteSchema);
import { Request, Response } from "express";
import { getQuotes } from "../helpers/api";

// Get all quotes
const all = async (req: Request, res: Response) => {
  let count: number = 50;
  if (req.query["count"]) {
    count = Number(req.query["count"]);
  }
  const quotes = await Quote.find();
  res.status(200).send(quotes.slice(0, count));
};

// Generate new requests
const generate = async (req: Request, res: Response) => {
  await getQuotes();
  res.status(200).send();
};

const getRandomQuote = async (req: Request, res: Response) => {
  const quotes = await Quote.find();
  const random = Math.floor(Math.random() * quotes.length);
  res.status(200).send(quotes[random]);
};

module.exports = {
  all,
  generate,
  getRandomQuote,
};
