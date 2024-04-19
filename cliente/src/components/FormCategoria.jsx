import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import { insertCategory, updateCategory } from "../services/categoryRequest";
import { toast } from "sonner";

const FormCategoria = () => {
  const [form, setForm] = useState({
    categoria: "",
  });
  const { stateCategory, dispatchCategory } = useCategory();
  const [disabled, setDisabled] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();

  const add = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true)
      const category = await insertCategory(form);
      dispatchCategory({ type: "add", payload: category });
      toast.success("Categoría Agregada");
      navigate("/categorias");
    } catch (error) {
      toast.error("Ha ocurrido un error");
      console.log(error);
    }
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true)
      const category = await updateCategory(form);
      dispatchCategory({ type: "update", payload: category });
      toast.success("Categoría Actualizada");
      navigate("/categorias");
    } catch (error) {
      toast.error("Ha ocurrido un error");
      console.log(error);
    }
  };

  const handleChange = (e, prop) => {
    setForm((prevState) => ({ ...prevState, [prop]: e.target.value }));
  };

  const categoryMemory = stateCategory.object[id];
  useEffect(() => {
    if (!id) return;
    setForm(categoryMemory);
  }, [id, categoryMemory]);


  return (
    <form
      onSubmit={!id ? add : update}
      className="mt-10 flex-grow mb-10 bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto"
    >
      <div className="flex flex-col space-y-1.5 p-6 relative">
        <Link
          to={"/categorias"}
          className="material-symbols-outlined absolute top-1 right-1 text-gray-400 rounded-full hover:bg-slate-300 hover:text-white transform ease-linear duration-75 cursor-pointer"
        >
          close
        </Link>
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Categoría
        </h3>
        <p className="text-sm text-muted-foreground">
          Ingrese detalles para agregar o editar una categoría
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="product"
          >
            Categoría
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm "
            placeholder="Alimentos"
            required
            type="text"
            value={form.categoria}
            onChange={(e) => handleChange(e, "categoria")}
          />
        </div>
      </div>
      <div className="grid gap-4 p-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-700 h-10 px-4 py-2 w-full"
          disabled={disabled}
        >
          {!id ? "Agregar Categoría" : "Actualizar Categoría"}
        </button>
      </div>
    </form>
  );
};

export default FormCategoria;
