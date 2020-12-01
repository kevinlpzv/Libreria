import React, { useState } from "react";
import {projectFirestore} from "../firebase/config";
import "./style.css";
import Crear from "../componentes/Botones/Crear";

const EditarLibro = (props) => {
    const id = props.id;
    const Titulo =props.Titulo
    const Autor =props.Autor
    const Editorial =props.Editorial
    const Clasificacion =props.Clasificacion
    //const setLibros = props.setLibros;
    //const libros = props;
    console.log(props.Titulo);
  const [titulo, setTitulo] = useState(Titulo);
  const [autor, setAutor] = useState(Autor);
  const [editorial, setEditorial] = useState(Editorial);
  const [clasificacion, setClasificacion] = useState(Clasificacion);

  const handleSubmit = (e) => {
    e.preventDefault();
    projectFirestore.collection("Libros").doc(id).set()({
        Titulo:titulo,
        Autor:autor,
        Editorial:editorial,
        Clasificacion:clasificacion,
    })
    alert("Libro Editado con Exito");
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
        <h2>Editar Libro</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo</label>
        <input
        value={Titulo}
          type="text"
          name="titulo"
          id="titulo"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Autor</label>
        <input
        value={Autor}
          type="text"
          name="autor"
          id="autor"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Editorial</label>
        <input
        value={Editorial}
          type="text"
          name="editorial"
          id="editorial"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Clasificacion</label>
        <input
        value={Clasificacion}
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
export default EditarLibro;


