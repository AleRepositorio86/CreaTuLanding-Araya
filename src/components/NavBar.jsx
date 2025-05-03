import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    
    <header>
      <nav className="navbar">
        <div className="brand-name">
          Mi Tienda
        </div>
        <ul className="nav-links">
          <li><a href="#categoria1">Mas vendidos</a></li>
          <li><a href="#categoria2">Nuevos</a></li>
          <li><a href="#categoria3">Todo</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
    
  
  );
};

export default NavBar;