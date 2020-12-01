import './App.css';
import React, { useEffect, useState} from 'react';
import { projectFirestore } from './firebase/config';

import Navbar from './componentes/Navbar/navbar';
import MisLibros from './Paginas/MisLibros';
import Crearlibro from './Paginas/CrearLibro';
import EditarLibro from './Paginas/EditarLibro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [libros, setLibros] = useState([]);
  const [libro, setLibro] = useState({});

  console.log('LIBRO A EDITAR:');
  console.log(libro);
  useEffect(
    function () {
      projectFirestore
        .collection('Libros')
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.log(data);
          setLibros(data);
        });
    },
    [libros]
  );
  console.log('AQUI ESTAN LOS LIBROS ' + libros);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/Mis_Libros'>
            <MisLibros
              libros={libros}
              setLibros={setLibros}
              setLibro={setLibro}
            />
          </Route>
          <Route path='/Crear_libros'>
            <Crearlibro />
          </Route>
          <Route path='/Editar_libro'>
            <EditarLibro
              libro={libro}
              setLibro={setLibro}
              setLibros={setLibros}
              libros={libros}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
