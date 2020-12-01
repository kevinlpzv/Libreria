import React from "react";
import "./style.css";
import Libro from "../../img/Libros.png"

const Banner = () => {
  return (
    <div className="contenedorBN">
      <div className="contenedorBN__texto">
        <h2>Libros online</h2>
        <p>Manten un registro de tus libros al dia <span>con esta gran aplicacion</span></p>
      </div>
      <div className="contenedorBN__IMG">
       <img src={Libro} alt="img"></img>
       </div>
    </div>
  );
};

export default Banner;
