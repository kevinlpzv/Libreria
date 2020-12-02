import React from 'react'
import Banner from "../componentes/Banner/Banner"
import ContenedorLibros from "../componentes/ContenedorLibros/ContenedorLibros"
import "./style.css"

const MisLibros = ({ libros, setLibros, setLibro }) => {
    return (
        <div className ="mis-libros">
            <Banner/>
            <ContenedorLibros
        libros={libros}
        setLibros={setLibros}
        setLibro={setLibro}
      />
        </div>
    )
}

export default MisLibros
