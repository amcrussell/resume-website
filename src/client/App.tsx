import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/navbar";
import AboutMe from "./views/About_Me";
import Projects from "./views/Projects";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="no-scrollbar overflow-hidden bg-black text-slate-300">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about_me" element={<AboutMe></AboutMe>} />
          <Route path="/projects" element={<Projects></Projects>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
