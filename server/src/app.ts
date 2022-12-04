import express, { Application, Request, Response } from "express";
const mongoose = require("mongoose");
const quotesRouter = require("./routes/quotes");
const cors = require("cors");

const app: Application = express();
const port: number = 5000;

// app.use(json());

mongoose.connect(
  "mongodb://localhost:27017/Quotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
);

app.use(
  cors({
    origin: "*",
  })
);
app.use("/quotes", quotesRouter);

// getQuotes();

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
