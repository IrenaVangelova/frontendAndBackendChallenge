import express, {Application, Request, Response} from 'express';
import { json } from 'body-parser';
import { getQuotes } from './helpers/api';
const mongoose = require('mongoose');
const quotesRouter = require('./routes/quotes');


const app: Application = express();
const port: number = 3000;

// app.use(json());

mongoose.connect("mongodb://localhost:27017/Quotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");

app.use('/quotes', quotesRouter);

getQuotes();

app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});