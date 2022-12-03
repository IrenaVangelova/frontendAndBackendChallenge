import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';

const RandomQuote = () => {

    const [randomQuotesData, setRandomQuoteData] = useState([]);

    useEffect(() => {
      fetch("https://api.quotable.io/random")
      .then((data) => data.json())
        .then((data) => setRandomQuoteData(data));
      },[])

    console.log(randomQuotesData);
    
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
        </div>
  );
}

export default RandomQuote;