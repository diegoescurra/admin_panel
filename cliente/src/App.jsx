import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Products } from "./pages/Products";
import Modal from "./components/shared/Modal";
import FormProducto from "./components/FormProducto";
import Categories from "./pages/Categories";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import FormCategoria from "./components/FormCategoria";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "productos", element: <Products /> },
      {
        path: "productos/agregar",
        element: (
          <Modal>
            <FormProducto />
          </Modal>
        ),
      },
      {
        path: "productos/editar/:id",
        element: (
          <Modal>
            <FormProducto />
          </Modal>
        ),
      },
      { path: "categorias", element: <Categories /> },
      {
        path: "categorias/agregar",
        element: (
          <Modal>
            <FormCategoria />
          </Modal>
        ),
      },
      {
        path: "categorias/editar/:id",
        element: (
          <Modal>
            <FormCategoria />
          </Modal>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
