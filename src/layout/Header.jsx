import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">TMDB App</Link>
        <button
 className="navbar-toggler"
          type="button"
  data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">Listado de Películas</NavLink>
            </li>
            <li className="nav-item">   <NavLink className="nav-link" to="/contact">Contacto</NavLink>
            </li>
 </ul>
        </div>
</div>
    </header>
  );
};

export default Header;