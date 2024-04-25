import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div>
      <BrowserRouter>
        <div>{/* add navbar*/}</div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
