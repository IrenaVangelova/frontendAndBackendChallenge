// import React, { useEffect, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';
// import { Button } from "@mui/material";
// import {CircularProgress} from "@mui/material";
// import Box from '@mui/material/Box';

// const columns = [
//   { field: '_id', headerName: 'ID', width: 150 },
//   { field: 'author', headerName: 'Author', width: 200 },
//   { field: 'content', headerName: 'Content', width: 800 },
//   { field: 'nationality', headerName: 'Nationality', width: 100 }
// ];

// const Quotes = () => {

//     const [quotesData, setQuoteData] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//       fetch("https://localhost:3000/quotes")
//       .then((data) => data.json())
//         .then((data) => {
//           let tableRows = [];
//           data.results.forEach((element) => {
//             let row = {
//               _id: element._id,
//               author: element.author,
//               content: element.content,
//               nationality: ""
//             }
//             tableRows.push(row);
//           });
//           setQuoteData(tableRows);
//           setIsLoaded(true)
//         });
//       },[])

//     const getNationality = async (name) => {
     
//       let nationality = null;

//       await fetch("https://api.nationalize.io/?name=" + name, {method: 'GET', mode: "cors", headers: {
//         'Content-Type': 'application/json'
//       }})
//       .then((data) => {return data.json()})
//       .then((data) => nationality = data.country[0].country_id);
    
//       return nationality;
//     }

//     const populateNationality = async () => {
//     if (quotesData != null) {
//       let newData = quotesData;
//       newData.forEach(async (element) => {
//         let nationality = await getNationality(element.author.split(" ")[0]);
//         element.nationality = nationality;
//       });

//       setQuoteData(newData);
//       setIsLoaded(false);
//     }
//   }

//   useEffect(() => {
//     if(isLoaded) {
//       populateNationality();
//     }
//   }, [isLoaded])

//   // useEffect(() => {
//   //   console.log(quotesData);
//   // },[quotesData])


//   let table = quotesData != null ? (<div style={{ height: 630, width: '100%' }}><DataGrid
//     getRowId={(row) => row._id}
//     rows={quotesData}
//     columns={columns}
//     pageSize={10}
//   />
//     <Button variant="contained" href="http://localhost:3000/random-quote">Random Quote</Button></div>) : (<Box sx={{
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//       position: 'absolute',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}><CircularProgress /></Box>);
    
//   return (
//     <div style={{ height: 630, width: '100%' }}>
//         {table}
//     </div>
//   );

// } 

// export default Quotes;
export {}