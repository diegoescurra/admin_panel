import { useCallback, useMemo, useState } from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";

export const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const { state } = useProduct();

  const filteredProducts = useMemo(() => {
    return searchInput !== null && searchInput.length > 2
      ? Object.values(state.object).filter((product) => {
          return product.nombre_producto
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      : state.object;
  }, [searchInput, state.object]);

  const rows = Object.values(filteredProducts).map((product) => ({
    id: product.id_producto,
    col2: product.nombre_producto,
    col3: product.precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    }),
    col4: product.categoria,
  }));

  const renderCell = useCallback(
    (id) => (
      <>
        <Link
          to={`/productos/editar/${id}`}
          className="p-2"
        >
          <span className="material-symbols-outlined">edit</span>
        </Link>
        <Link 
          to={`/inventario/${id}`}
        className="p-2">
          <span className="material-symbols-outlined">inventory</span>
        </Link>
      </>
    ),
    []
  );

  return (
    <>
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-semibold mb-4 shadow-sm border-b py-4">Gestión de Productos</h3>
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/productos/agregar"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="material-symbols-outlined">add</span>
            <span className="hidden sm:block sm:text-sm">Añadir Producto</span>
          </Link>
          <div className="relative w-full max-w-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="text"
              className="pl-10 pr-3 py-2 border border-gray-300 bg-white text-sm rounded-full shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-emerald-900"
              placeholder="Buscar producto..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </div>
        </div>
      </div>

      <Table
        columns={["Producto", "Precio", "Categoría", "Acciones"]}
        rows={rows}
        renderCell={renderCell}
      />
    </>
  );
};
