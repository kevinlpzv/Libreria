import React from 'react';
import Crear from '../Botones/Crear';
import Libro from './Libro';
import './style.css';
const ContenedorLibros = ({ libros, setLibros, setLibro }) => {
  return (
    <div className='ContenedorLibros'>
      <h2>Mis libros</h2>
      {libros.length === 0 && (
        <React.Fragment>
          <p>No hay libros registrados</p>
          <Crear EsLink={true} />
        </React.Fragment>
      )}
     
      <Libro libros={libros} setLibros={setLibros} setLibro={setLibro} />
    </div>
  );
};

export default ContenedorLibros;
