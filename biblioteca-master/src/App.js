import "./App.css";
import Navbar from "./componentes/Navbar/navbar";
import MisLibros from "./Paginas/MisLibros";
import Crearlibro from "./Paginas/CrearLibro";
import EditarLibro from "./Paginas/EditarLibro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Mis_Libros">
            <MisLibros />
          </Route>
          <Route path="/Crear_libros">
            <Crearlibro />
          </Route>
          <Route path="/Editar_libro">
          <EditarLibro/>
            <Crearlibro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
