import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import Logo from "../../img/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="contenedor">
        <div className="logo">
          <img src={Logo} alt="imglogo" style={{maxWidth:"140px"}}></img>
        </div>
          <h2>Manejar Libros</h2>
        <div className="links">
          <Link to="/Mis_Libros">Mis libros</Link>
          <Link to="/Crear_libros">Crear Libro</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
