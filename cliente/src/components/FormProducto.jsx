import React, { useContext, useEffect, useState } from 'react'
import { fetchCategorys } from '../services/categoryRequest';
import { insertProducts } from '../services/productsRequest';
import { Context } from '../context/ProductContext';
import {useNavigate, useParams} from 'react-router-dom'

const FormProducto = () => {

const [form, setForm] = useState({
  nombre_producto : '',
  precio: 0,
  id_categoria: 1
});
const { id } = useParams()
const [state, dispatch] = useContext(Context);
const [category, setCategory] = useState([])
const navigate = useNavigate();

useEffect(() => {
async function getCategories() {
  const categorias = await fetchCategorys();
  setCategory(categorias)
}
getCategories() 
}, [])

const add = async () => {
  const newProduct = await insertProducts(form);
  dispatch({type: 'add', payload: newProduct})
}

const close = () => {
  navigate('/productos')
  
}

const productMemory = state.object[id];
useEffect(() => {
  if(!id) return;
  setForm(productMemory)
},[])

console.log(state.object)

const {nombre_producto, precio, id_categoria} = form;

const onChange = (e, prop) => {
  setForm(state => ({...state, [prop] : e.target.value}))
}


  return (
    <form className="mt-10 flex-grow mb-10 bg-white" >
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Producto</h3>
        <p className="text-sm text-muted-foreground">Ingrese detalles para agregar o editar un producto</p>
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
              onChange={e => onChange(e, 'nombre_producto')}
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
              placeholder='1000'
              required
              type="number"
              value={precio}
              onChange={e => onChange(e, 'precio')}
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
              className='w-full h-10 bg-white px-3 py-2 text-sm border rounded ring-offset-background'
              value={id_categoria}
              onChange={e => onChange(e, 'categoria')}
            >
              {category.map((categoria) => (
                <option value={categoria.id_categoria} key={categoria.id_categoria}>{categoria.categoria}</option>
              ))}
            </select>
          </div>
      </div>
      <div className="grid gap-4 p-4">
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-700 h-10 px-4 py-2 w-full"
          type="submit"
          onSubmit={add}
        >
          Agregar Producto
        </button>
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-400 text-white hover:bg-gray-700 h-10 px-4 py-2 w-full"
          type="button"
          onClick={close}
        >
          Cerrar
        </button>
      </div>
    </div>
    </form>
  )
}

export default FormProducto