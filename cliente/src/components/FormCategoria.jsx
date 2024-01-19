import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useCategory from '../hooks/useCategory';
import { insertCategory } from '../services/categoryRequest';

const FormCategoria = () => {

  const [form, setForm] = useState({
    categoria : ''
  });
  const {stateCategory, dispatchCategory} = useCategory();


  const { id } = useParams();
  const navigate = useNavigate();

  const add = async (e) => {
    e.preventDefault();
    const category = await insertCategory(form);
    dispatchCategory({type: 'add', payload : category})
    navigate('/categorias')

  }

  const update = (e) => {
    e.preventDefault()
    console.log(stateCategory.object[id])

  }

  const handleClose = () => {
    navigate('/categorias')
  }

  const handleChange = (e, prop) => {
    setForm(prevState => ({...prevState, [prop]: e.target.value}))
  }

  
  return (
    <form 
    onSubmit={!id ? add : update}
    className='mt-10 flex-grow mb-10 bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto'
    >

       <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Categoría
          </h3>
          <p className="text-sm text-muted-foreground">
            Ingrese detalles para agregar o editar una categoría
          </p>
        </div>
       <div className='p-6'>
       <div className='space-y-2'>
       <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="product"
            >
              Categoría
            </label>
      <input
              className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm "
              placeholder='Alimentos'
              required
              type="text"
              value={form.categoria}
              onChange={e => handleChange(e, 'categoria')}
            />
       </div>
       </div>
     <div className='grid gap-4 p-4'>
     <button 
      type='submit'
      className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-700 h-10 px-4 py-2 w-full'
      >
        {!id ? 'Agregar Categoría' : 'Actualizar Categoría'}
      </button>
      <button
        onClick={handleClose}
        type='button'
        className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-400 text-white hover:bg-gray-700 h-10 px-4 py-2 w-full'
      >
        Cerrar
      </button>
     </div>
    </form>
  )
}

export default FormCategoria