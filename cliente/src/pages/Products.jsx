import { useState } from "react";
import Table from "../components/Table";
import useFetchProducts from "../hooks/useFetchProducts";


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
    col3: product.precio,
    col4: product.categoria,
  }));

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm m-auto w-9/12">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Gestión de Productos
        </h3>
      </div>
      <div className="p-6 w-full">
        <div className="flex justify-end gap-2">
        <div className="relative w-full max-w-md">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-gray-400"
    >
      <path d="M6 18h8"></path>
      <path d="M3 22h18"></path>
      <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
      <path d="M9 14h2"></path>
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
    </svg>
  </div>
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
