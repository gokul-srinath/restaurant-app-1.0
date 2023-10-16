import React from "react";
import './navbar.css'
const NavBar = () => {
  return (
    <div className="nav">
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </div>
  );
};

export default NavBar;
