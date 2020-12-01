import React, { useState } from "react";
import {projectFirestore} from "../firebase/config";
import "./style.css";
import Crear from "../componentes/Botones/Crear";

const CrearLibro = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [clasificacion, setClasificacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    projectFirestore.collection("Libros").add({
        Titulo:titulo,
        Autor:autor,
        Editorial:editorial,
        Clasificacion:clasificacion,
    })
    alert("Libro Registado con Exito");
    setTitulo("");
    setAutor("");
    setEditorial("");
    setClasificacion("");

  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case "titulo":
        setTitulo(inputValue);
        break;
      case "autor":
        setAutor(inputValue);
        break;
      case "editorial":
        setEditorial(inputValue);
        break;
      case "clasificacion":
        setClasificacion(inputValue);
        break;
      default:
          alert("imputname no esta considiendo")  
    }
  };
  return (
    <div className="crearLibro">
        <h2>Crear Libro</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo</label>
        <input
        value={titulo}
          type="text"
          name="titulo"
          id="titulo"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Autor</label>
        <input
        value={autor}
          type="text"
          name="autor"
          id="autor"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Editorial</label>
        <input
        value={editorial}
          type="text"
          name="editorial"
          id="editorial"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Clasificacion</label>
        <input
        value={clasificacion}
          type="text"
          name="clasificacion"
          id="clasificacion"
          onChange={handleChange}
        ></input>
        <div className="BtnDiv">
        <Crear/>
        </div>
      </form>
    </div>
  );
};

export default CrearLibro;
