import React from 'react'
import Banner from "../componentes/Banner/Banner"
import ContenedorLibros from "../componentes/ContenedorLibros/ContenedorLibros"
import "./style.css"

const MisLibros = () => {
    return (
        <div className ="mis-libros">
            <Banner/>
            <ContenedorLibros/>
        </div>
    )
}

export default MisLibros
