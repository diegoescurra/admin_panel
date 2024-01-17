import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./pages/Products";
import Modal from "./components/shared/Modal";
import FormProducto from "./components/FormProducto";
import Categories from "./pages/Categories";
import Layout from "./components/Layout";

function App() {



  return (
    <BrowserRouter>
      
    <Routes>      
      <Route path="/" element={<Layout />} >
      <Route path="/productos" index element={< Products/>} />
      <Route path="/productos/agregar" element={
        <Modal>
          <FormProducto />
        </Modal>
      } />

      <Route path="/productos/editar/:id" element={
        <Modal>
          <FormProducto />
        </Modal>
      } />
      <Route path="/categorias" element={<Categories />} />
      </Route> 
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
