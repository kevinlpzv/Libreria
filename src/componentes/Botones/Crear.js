import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ReactComponent as IconoCrear } from '../../img/IconoCrear.svg';

const Crear = (props) => {
  const EsLink = props.EsLink;
  return (
    <>
      {EsLink ? (
        <Link to='/Crear_libros' className='BtnCrear'>
          <IconoCrear /> <span>Crear Libro</span>
        </Link>
      ) : (
        <button className='BtnCrear'>
          <IconoCrear /> <span>Guardar</span>
        </button>
      )}
    </>
  );
};

export default Crear;
