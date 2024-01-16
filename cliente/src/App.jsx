import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Products } from "./pages/Products";
import { Sidebar } from "./components/Sidebar";
import Modal from "./components/shared/Modal";
import FormProducto from "./components/FormProducto";

function App() {




  return (
    <BrowserRouter>
      <Sidebar />
    <Routes>      
      <Route path="/productos" element={< Products/>} />
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
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
