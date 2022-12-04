import axios from "axios";
const mongoose = require("mongoose");
const { quoteSchema } = require("../models/quote");
const Quote = mongoose.model("Quote", quoteSchema);

// Get quotes from third-party api and populate local database
export const getQuotes = async () => {
  // Delete the old data to avoid duplicates
  await Quote.deleteMany({});
  // Repopulate the server with data from third-party api
  await axios
    .get("https://api.quotable.io/quotes")
    .then((res) => {
      let data = res.data.results.sort(() => 0.5 - Math.random()).slice(0, 20);
      data.forEach(async (element: { author: string; content: string }) => {
        if (element.author != null && element.content != null) {
          const quote = new Quote({
            author: element.author,
            content: element.content,
          });
          await quote.save();
        }
      });
    })
    .then(() => console.log("server log --> Data successfuly fetched"))
    .catch((err) => console.log(err));
};
