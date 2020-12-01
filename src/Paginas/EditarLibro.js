import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';
import './style.css';
import Crear from '../componentes/Botones/Crear';

const EditarLibro = ({ libro, libros, setLibros, setLibro }) => {
  console.log('EDITAR LIBRO RENDER');
  // PROPS
  const id = libro.id;
  const Titulo = libro.Titulo;
  const Autor = libro.Autor;
  const Editorial = libro.Editorial;
  const Clasificacion = libro.Clasificacion;
  // ESTADO
  const [titulo, setTitulo] = useState(Titulo);
  const [autor, setAutor] = useState(Autor);
  const [editorial, setEditorial] = useState(Editorial);
  const [clasificacion, setClasificacion] = useState(Clasificacion);

  const librosEditados = () => {
    const librosEditados = libros.map((lib) => {
      if (lib.id !== libro.id) {
        return lib;
      } else {
        return { id, titulo, autor, editorial, clasificacion };
      }
    });
    return librosEditados;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    projectFirestore.collection('Libros').doc(id).update({
      Titulo: titulo,
      Autor: autor,
      Editorial: editorial,
      Clasificacion: clasificacion,
    });
    const listarLibros = librosEditados();
    console.log('Listar libros');
    console.log(listarLibros);
    setLibros(listarLibros);

    alert('Libro Editado con Exito');
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log('NAME:' + inputName);
    console.log('VALUE:' + inputValue);
    switch (inputName) {
      case 'titulo':
        setTitulo(inputValue);
        break;
      case 'autor':
        setAutor(inputValue);
        break;
      case 'editorial':
        setEditorial(inputValue);
        break;
      case 'clasificacion':
        setClasificacion(inputValue);
        break;
      default:
        alert('imputname no esta considiendo');
    }
  };
  return (
    <div className='crearLibro'>
      <h2>Editar Libro</h2>
      <form className='formulario' onSubmit={handleSubmit}>
        <label htmlFor=''>Titulo</label>
        <input
          value={titulo}
          type='text'
          name='titulo'
          id='titulo'
          onChange={handleChange}
        ></input>
        <label htmlFor=''>Autor</label>
        <input
          value={autor}
          type='text'
          name='autor'
          id='autor'
          onChange={handleChange}
        ></input>
        <label htmlFor=''>Editorial</label>
        <input
          value={editorial}
          type='text'
          name='editorial'
          id='editorial'
          onChange={handleChange}
        ></input>
        <label htmlFor=''>Clasificacion</label>
        <input
          value={clasificacion}
          type='text'
          name='clasificacion'
          id='clasificacion'
          onChange={handleChange}
        ></input>
        <div className='BtnDiv'>
          <Crear />
        </div>
      </form>
    </div>
  );
};
export default EditarLibro;
