import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useInventory from "../hooks/useInventory";

const FormStock = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { inventory } = useInventory(id);
  const [form, setForm] = useState({
    stock: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/productos");
  };

  const handleChange = (e, prop) => {
    setForm((prevState) => ({ ...prevState, [prop]: e.target.value }));
  };

  const inventario = inventory[0];
  useEffect(() => {
    inventario ? setForm(inventario) : "";
  }, [inventario]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex-grow mb-10 bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto"
    >
      <div className="flex flex-col space-y-1.5 p-6 relative">
      <Link
          to={"/productos"}
          className="material-symbols-outlined absolute top-1 right-1 text-gray-400 rounded-full hover:bg-slate-300 hover:text-white transform ease-linear duration-75 cursor-pointer"
        >
          close
        </Link>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
          Inventario
        </h3>
      </div>
      <div className="p-2">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="Stock"
          >
            Stock
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm "
            placeholder="7"
            required
            type="text"
            value={form.stock}
            onChange={(e) => handleChange(e, "stock")}
          />
        </div>
      </div>
      <div className="grid gap-4 p-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-700 h-10 px-4 py-2 w-full"
          disabled
        >
          Actualizar Stock
        </button>
       
      </div>
    </form>
  );
};

export default FormStock;
