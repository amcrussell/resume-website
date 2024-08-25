import React from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-14 items-center justify-around border border-cyan-400 bg-slate-900 py-4 text-slate-100">
      <Link to="/">home</Link>
      <Link to="/about_me">about me</Link>
      <Link to="/projects">projects</Link>
      <span>(706) 389-1194 </span>
      <span>amcrussell03@gmail.com</span>
    </div>
  );
}
