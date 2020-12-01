import React from 'react'
import "./style.css";
import {projectFirestore} from "../../firebase/config"
import {ReactComponent as IconoEliminar} from "../../img/Eliminar.svg"
import Libro from '../ContenedorLibros/Libro';
const Eliminar = (props) => {
    const id = props.id;
    const setLibros = props.setLibros;
    const libros = props.libros;
    const handleClick = async (e)=>{

            await projectFirestore.collection("Libros").doc(id).delete();
            const librosRestantes = libros.filter(function(libro){
                return(
                    libro.id !== id  
                )
            })
            setLibros(librosRestantes);
            alert("Libro borrado!");
    }
    return (
        <div>
        <button onClick={handleClick} className='BtnCrear BtnEliminar'>
          <IconoEliminar /> <span>Eliminar Libro</span>
        </button>
        </div>
    )
}

export default Eliminar
