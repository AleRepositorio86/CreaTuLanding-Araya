import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="brandname">
          <Link to="/">
          <img src={logo} alt="Logo Mi Tienda" className="logo-img" />
        </Link>
        </div>
      <div className="categories">
        <Link to="/">Todos</Link>
        <Link to="/filtro/disponibles">Disponibles</Link>
        <Link to="/filtro/no-disponibles">No disponibles</Link>
        <Link to="/categoria/juguete">Juguetes</Link>
        <Link to="/categoria/comida">Comida</Link>
        <Link to="/categoria/accesorio">Accesorios</Link>
        <Link to="/categoria/medicina">Medicina</Link>
      </div>
      <div className="cart">
          <Link to="/carrito" className="cart-icon">
    🛒
    <span className="cart-count">3</span> {/* número de ítems */}
  </Link>
      </div>
    </nav>
  );
}

export default NavBar;
