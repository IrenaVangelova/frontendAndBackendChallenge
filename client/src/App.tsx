import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";
import RandomQuote from "./pages/RandomQuote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Quotes />} />
            <Route path="/random-quote" element={<RandomQuote />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
