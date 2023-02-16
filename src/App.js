import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

// Redux
import { Provider } from "react-redux";
import store from './store'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Productos />}></Route>
            <Route exact path="/productos/nuevo" element={<NuevoProducto />}></Route>
            <Route exact path="/productos/editar/:id" element={<EditarProducto />}></Route>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
