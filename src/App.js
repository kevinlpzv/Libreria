import {db} from './firebase'
import {useState, useEffect} from 'react'

function App() {

  const [libros, setLibros] = useState([])
  const [titulo, setTitulo] = useState([])
  const [autor, setAutor] = useState([])
  const [clasificacion, setClasificacion] = useState([])
  const [editorial, setEditorial] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')

  const getLibros = async () =>{
    const data = await db.collection('Libros').get()
    const arrayLibros = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setLibros(arrayLibros)
    console.log(libros)
  }

    useEffect(()=>{
      getLibros()
   },[]) // eslint-disable-line react-hooks/exhaustive-deps

   const agregarLibro = async(e)=>{
      e.preventDefault()
      db.collection('Libros').add({
        Autor: autor,
        Clasificacion: clasificacion,
        Editorial: editorial,
        Titulo: titulo
      })
      getLibros()
   }

    const activarEdicion = (item) =>{
      setModoEdicion(true)
        setAutor(item.Autor)
        setClasificacion(item.Clasificacion)
        setEditorial(item.Editorial)
        setTitulo(item.Titulo)
        setId(item.id)
      
    }

    const editarLibro = async(e) =>{
      e.preventDefault()
      await db.collection('Libros').doc(id).update({
        Autor: autor,
        Clasificacion: clasificacion,
        Editorial: editorial,
        Titulo: titulo
      })
      getLibros() 
    }

    const eliminarLibro = async(id) =>{
      await db.collection('Libros').doc(id).delete()
      getLibros()
    }

  return (
    <div>
      <h1>Listado</h1>
      <form onSubmit = {modoEdicion ? editarLibro : agregarLibro}>
          <div>
            <label>Autor</label>
            <input type="text" value={autor} onChange={e => setAutor(e.target.value)} required></input>
            <label>Clasificacion</label>
            <input type="text" value={clasificacion} onChange={e => setClasificacion(e.target.value)} required></input>
            <label>Editorial</label>
            <input type="text" value={editorial} onChange={e => setEditorial(e.target.value)} required></input>
            <label>Titulo</label>
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required></input>
            <button type="submit">Aceptar</button>
          </div>
          
      </form>
      <ul>
        {
        libros.map(item => (
          <li key = {item.id}>
            <ul> Autor: {item.Autor}</ul>
            <ul> ID: {item.id}</ul>
            <ul> Clasificacion: {item.Clasificacion}</ul>
            <ul> Editorial: {item.Editorial}</ul>
            <ul> Titulo: {item.Titulo}</ul>
            <button onClick={() => activarEdicion(item)}>Editar</button>
            <button onClick={() => eliminarLibro(item.id)}>Eliminar</button>
        </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;