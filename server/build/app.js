"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const quotesRouter = require("./routes/quotes");
const cors = require("cors");
const app = (0, express_1.default)();
const port = 5000;
// app.use(json());
mongoose.connect("mongodb://localhost:27017/Quotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
app.use(cors({
    origin: "*",
}));
app.use("/quotes", quotesRouter);
// getQuotes();
app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
