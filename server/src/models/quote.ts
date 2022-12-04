import { Schema, model, connect } from "mongoose";
import { IQuote } from "./IQuote";

export const quoteSchema = new Schema<IQuote>({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
