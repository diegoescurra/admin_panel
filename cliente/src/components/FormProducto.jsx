import { useEffect, useState } from "react";
import { insertProducts, updateProducts } from "../services/productsRequest";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useCategory from "../hooks/useCategory";
import { toast } from 'sonner';

const FormProducto = () => {
  const [form, setForm] = useState({
    nombre_producto: "",
    precio: 0,
    id_categoria: 1,
  });
  const { id } = useParams();
  const { state, dispatch } = useProduct();
  const { stateCategory } = useCategory();
  const navigate = useNavigate();
  const categorias = Object.values(stateCategory.object);



  const add = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await insertProducts(form);
      dispatch({ type: "add", payload: newProduct });
      toast.success('Producto agregado')
      navigate("/productos");
    } catch (error) {
      toast.error('Ha ocurrido un error')
      console.log(error);
    }
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await updateProducts(form);
      dispatch({ type: "update", payload: updatedProduct });
      toast.success('Producto Actualizado')
      navigate("/productos");
    } catch (error) {
      toast.error('Ha ocurrido un error')
      console.log(error)
    }
  };


  const productMemory = state.object[id];
  useEffect(() => {
    if (!id) return;
    setForm(productMemory);
  }, [id, productMemory]);

  const { nombre_producto, precio, id_categoria } = form;

  const onChange = (e, prop) => {
    setForm((state) => ({ ...state, [prop]: e.target.value }));
  };

  return (
    <form
      className="mt-10 flex-grow mb-10 bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto"
      onSubmit={!id ? add : update}
    >
      <div className="flex flex-col space-y-1.5 p-6 relative">
        <Link
          to={"/productos"}
          className="material-symbols-outlined absolute top-1 right-1 text-gray-400 rounded-full hover:bg-slate-300 hover:text-white transform ease-linear duration-75 cursor-pointer"
        >
          close
        </Link>

        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Producto
        </h3>
        <p className="text-sm text-muted-foreground">
          Ingrese detalles para agregar o editar un producto
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="product"
          >
            Producto
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Fideos"
            required
            type="text"
            value={nombre_producto}
            onChange={(e) => onChange(e, "nombre_producto")}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm "
            placeholder="1000"
            required
            type="text"
            value={precio}
            pattern="[0-9]+"
            title="Solo ingrese números"
            onChange={(e) => onChange(e, "precio")}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="category"
          >
            Categoría
          </label>

          <select
            required
            className="w-full h-10 bg-white px-3 py-2 text-sm border rounded ring-offset-background"
            value={id_categoria}
            onChange={(e) => onChange(e, "id_categoria")}
          >
            {categorias.map((categoria) => (
              <option
                value={categoria.id_categoria}
                key={categoria.id_categoria}
              >
                {categoria.categoria}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 p-4">
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-700 h-10 px-4 py-2 w-full"
          type="submit"
        >
          {id ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </div>
    </form>
  );
};

export default FormProducto;
