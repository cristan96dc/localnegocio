import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container">
      <h1>El Progreso</h1>
      <h2>Tienda de cortinas</h2>
      <br />
      <div className="navbar">
        <a href="#gallery" className="navbar-button">Nuestros trabajos</a>
        <a href="#contact" className="navbar-button">Contacto</a>
        <a href="#productos" className="navbar-button">Productos</a>
      </div>
    </div>
  );
}

export default Navbar;
