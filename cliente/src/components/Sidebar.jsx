import { NavLink } from 'react-router-dom'
import './sidebar.css'


export const Sidebar = () => {



  return (
    <aside className="flex flex-col h-screen bg-gray-100 w-56 absolute">
    <header className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
      <span className="text-lg font-semibold">Admin Panel</span>
     
    </header>
    <nav className="flex-grow mt-6">
      <ul className="space-y-1">
        <li>
        <NavLink
            to={'/dashboard'}
            className={({isActive}) => 
              isActive ? "active" : "unActive"
            }
          >
          
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
        <NavLink
            to={'/usuarios'}
            className={({isActive}) => 
              isActive ? "active" : "unActive"
            }
          >
           
            <span>Usuarios</span>
          </NavLink>
        </li>
        <li>
        <NavLink
            to={'/categorias'}
            className={({isActive}) => 
              isActive ? "active" : "unActive"
            }
          >
           
            <span>Categorías</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/productos'}
            className={({isActive}) => 
              isActive ? "active" : "unActive"
            }
          >
           
            <span>Productos</span>
          </NavLink>
        </li>
      </ul>
    </nav>
    <footer className="flex items-center justify-between px-6 py-4 border-t dark:border-gray-700">
      <span className="text-sm text-gray-600 dark:text-gray-400">
       <strong>admin</strong>
      </span>
      <a
        className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        href="#"
      >
        Cerrar Sesión
      </a>
    </footer>
  </aside>
  )
}
