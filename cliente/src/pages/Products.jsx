import { useState } from "react";
import Table from "../components/Table";
import useFetchProducts from "../hooks/useFetchProducts";
import { Link } from "react-router-dom";


export const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const state = useFetchProducts()


  const filteredProducts =
    searchInput !== null && searchInput.length > 0
      ? Object.values(state.object).filter((product) => {
        return product.nombre_producto
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      })
      : state.object;


  const rows = Object.values(filteredProducts).map((product) => ({
    id: product.id_producto,
    col2: product.nombre_producto,
    col3: product.precio.toLocaleString('es-CL', {style:'currency', currency: 'CLP'}),
    col4: product.categoria,
  }));



  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm ml-56 w-9/12" >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Gestión de Productos
        </h3>
      </div>
      <div className="p-6 w-full">
        <div className="flex justify-around pb-4">
         <Link to='/productos/agregar' className="shadow-lg rounded p-2 text-sm">
          + Añadir Producto
         </Link>
          <div className="relative flex w-full max-w-md">

            <input
              type="text"
              className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full pl-10 pr-10 sm:text-sm rounded-md"
              placeholder="Buscar"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />

          </div>
        </div>
        <Table
          columns={["Producto", "Precio", "Categoría", "Acciones"]}
          rows={rows}
        />
      </div>
    </div>

  );
};
