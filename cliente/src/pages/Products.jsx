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
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-500"
        >
          Editar
        </Link>
      </>
    ),
    []
  );

  return (
    <>
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-semibold mb-4">Gestión de Productos</h3>
        <div className="flex items-center justify-between">
          <Link
            to="/productos/agregar"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            + Añadir Producto
          </Link>
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              className="h-10 border border-gray-300 bg-white px-5 pr-10 text-sm rounded-lg shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:gray-emerald-900"
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
