import { Link } from 'react-router-dom';
import Table from '../components/Table'
import useCategory from '../hooks/useCategory'
import Loading from '../components/shared/Loading';

const Categories = () => {

    const { stateCategory, isLoading } = useCategory();
    let rows = []

     if (stateCategory.object && Object.keys(stateCategory.object).length > 0) {
      rows = Object.values(stateCategory.object).map(category => ({
        id: category.id_categoria,
        col2: category.categoria
    }))
     }

     const renderCell = (id) => (
      <Link to={`/categorias/editar/${id}`}
      className='bg-gray-700 text-white p-2 rounded hover:bg-gray-500'
      >
        Editar
      </Link>
     )

     
  return (
    <>
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-semibold mb-4">Gestión de Categorías</h3>
        <div className="flex items-center justify-between">
          <Link
            to="/categorias/agregar"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
             <span className="material-symbols-outlined">add</span> Añadir Categoría
          </Link>
          <div className="relative w-full max-w-lg">
          
          </div>
        </div>
      </div>
    
    <Table 
        columns={["Categoria", "Acciones"]}
        rows={rows}
        renderCell={renderCell}
    />
    </>
  )
}

export default Categories