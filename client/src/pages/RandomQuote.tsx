import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { endpoints } from "../helpers/api";
import { Link } from "react-router-dom";

interface IQuote {
  author: string;
  content: string;
}

const RandomQuote = () => {
  const initialValues: IQuote = { author: "", content: "" };
  const [randomQuotesData, setRandomQuoteData] =
    useState<IQuote>(initialValues);

  const getRandomQuote = () => {
    fetch(endpoints.quotes.random)
      .then((data) => data.json())
      .then((data) => setRandomQuoteData(data));
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h4">
            <h2>{randomQuotesData.author}</h2>
          </Typography>
          <Typography variant="h3" component="div">
            <p>{randomQuotesData.content}</p>
          </Typography>
        </CardContent>
      </Card>
      <Link to="/" style={{ textDecoration: "none", margin: "5px" }}>
        <Button variant="contained">Back</Button>
      </Link>
      <Button variant="contained" onClick={getRandomQuote}>
        Random Quote
      </Button>
    </div>
  );
};

export default RandomQuote;
