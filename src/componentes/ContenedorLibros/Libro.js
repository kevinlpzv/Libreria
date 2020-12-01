import React from 'react';
import Editar from '../Botones/Editar';
import Eliminar from '../Botones/Eliminar';

const Libro = (props) => {
  const libros = props.libros;
  const setLibros = props.setLibros;
  const setLibro = props.setLibro;

  return (
    <>
      {libros.map((libro) => {
        return (
          <div key={libro.id}>
            <div className='ListaLibros'>
              <div className='ListaImagen'> </div>
              <div className='ListaDescripcion'>
                <div className='ListaDescripcionizq'>
                  <h3>Titulo</h3>
                  <p>{libro.Titulo}</p>
                  <h3>Autor</h3>
                  <p>{libro.Autor}</p>
                </div>
                <div className='ListaDescripcionDer'>
                  <h3>Editorial</h3>
                  <p>{libro.Editorial}</p>
                  <h3>Clasificacion</h3>
                  <p>{libro.Clasificacion}</p>
                </div>
              </div>
              <div className='ListaBotones'>
                <Editar libro={libro} setLibro={setLibro} />
                <Eliminar id={libro.id} libros={libros} setLibros={setLibros} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Libro;
