import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="brandname">
        <NavLink to="/" end>
          <img src={logo} alt="Logo Mi Tienda" className="logo-img" />
        </NavLink>
      </div>
      <div className="categories">
        <NavLink to="/" end>Todos</NavLink>
        <NavLink to="/filtro/disponibles">Disponibles</NavLink>
        <NavLink to="/filtro/no-disponibles">No disponibles</NavLink>
        <NavLink to="/categoria/juguete">Juguetes</NavLink>
        <NavLink to="/categoria/comida">Comida</NavLink>
        <NavLink to="/categoria/accesorio">Accesorios</NavLink>
        <NavLink to="/categoria/medicina">Medicina</NavLink>
      </div>
      <div className="cart">
        <NavLink to="/carrito" className="cart-icon">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
