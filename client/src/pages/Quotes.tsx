import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { endpoints } from "../helpers/api";
import { Link } from "react-router-dom";

const columns = [
  { field: "_id", headerName: "ID", width: 150 },
  { field: "author", headerName: "Author", width: 200 },
  { field: "content", headerName: "Content", width: 800 },
  { field: "nationality", headerName: "Nationality", width: 100 },
];

interface IRow {
  _id: string;
  author: string;
  content: string;
  nationality: string;
}

const Quotes = () => {
  const [quotesData, setQuoteData] = useState<IRow[] | null | undefined>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getQuotesData = async () => {
    await fetch(endpoints.quotes.get)
      .then((data) => data.json())
      .then((data) => {
        let tableRows: IRow[] = [];
        data.forEach((element: any) => {
          let row: IRow = {
            _id: element._id,
            author: element.author,
            content: element.content,
            nationality: "",
          };
          tableRows.push(row);
        });
        setQuoteData(tableRows);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getQuotesData();
  }, []);

  const getNationality = async (name: string) => {
    let nationality = null;

    await fetch("https://api.nationalize.io/?name=" + name, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => (nationality = data.country[0].country_id));

    return nationality;
  };

  const populateNationality = async () => {
    if (quotesData != null && quotesData.length > 0) {
      let newData = quotesData;
      newData.forEach(async (element) => {
        let nationality: string | null | undefined = await getNationality(
          element.author.split(" ")[0]
        );
        if (nationality != null) {
          element.nationality = nationality;
        } else {
          element.nationality = "";
        }
      });

      setQuoteData(newData);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      populateNationality();
    }
  }, [isLoaded]);

  const generateQuotes = async () => {
    await fetch(endpoints.quotes.generate).then(() => getQuotesData());
  };

  let table =
    quotesData != null && quotesData.length > 0 ? (
      <div style={{ width: "100%" }}>
        <DataGrid
          autoHeight={true}
          getRowId={(row) => row._id}
          rows={quotesData}
          columns={columns}
          pageSize={10}
        />
        <Link to="/random-quote" style={{ textDecoration: "none" }}>
          <Button variant="contained">Random Quote</Button>
        </Link>
        <Button variant="contained" onClick={generateQuotes}>
          Generate
        </Button>
      </div>
    ) : (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return <div style={{ height: 630, width: "100%" }}>{table}</div>;
};

export default Quotes;
