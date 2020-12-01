import React from 'react'
import "./style.css";
import {Link} from "react-router-dom"
import {ReactComponent as IconoEditar} from "../../img/Editar.svg"

const Editar = () => {
    return (
        <div style= {{marginBottom: "2em"}}>
        <Link to='/Editar_libro' className='BtnCrear'>
        <IconoEditar /> <span>Editar Libro</span>
      </Link>
      </div>
    )
}

export default Editar
