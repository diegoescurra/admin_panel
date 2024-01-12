import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Products } from "./pages/Products";
import { Sidebar } from "./components/Sidebar";

function App() {




  return (
    <BrowserRouter>
      <Sidebar />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/productos" element={< Products/>} />
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
