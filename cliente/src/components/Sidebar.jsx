import { NavLink } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {



  return (
    <aside className="flex flex-col h-screen bg-gray-100 w-56 fixed">
    <header className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
      <span className="text-lg font-semibold">Admin Panel</span>
     
    </header>
    <nav className="flex-grow mt-6">
      <ul className="space-y-1">
        <li>
        <NavLink
            to={'/'}
            className={({isActive}) => 
              isActive ? "active" : "unActive"
            }
          >
          
            <span>Dashboard</span>
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
      
    </footer>
  </aside>
  )
}

export default Sidebar