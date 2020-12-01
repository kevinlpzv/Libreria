import React,{useEffect,useState} from "react";
import {projectFirestore} from "../../firebase/config";
import Crear from "../Botones/Crear";
import Libro  from "./Libro"
import "./style.css";
const ContenedorLibros = () => {
   const[Libros,setLibros]= useState([])
   useEffect(function(){
    projectFirestore
    .collection('Libros')
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {return{id:doc.id,...doc.data()}});
      console.log(data);
      setLibros(data);
    });
   },[])
  return (
    <div className="ContenedorLibros">
      <h2>Mis libros</h2>
      {Libros.length === 0 && (
        <React.Fragment>
          <p>No hay libros registrados</p>
          <Crear EsLink={true} />
        </React.Fragment>
      )}
      <Libro  libros={Libros} setLibros={setLibros}/>
    </div>
  );
};

export default ContenedorLibros;
