import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-zinc-950 w-20 lg:w-56 min-h-screen text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
        <span className="text-sm lg:text-lg font-semibold">Admin Panel</span>
      </header>
      <nav className="flex-grow mt-6">
        <ul className="space-y-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
              <span className="material-symbols-outlined">
                bar_chart_4_bars
              </span>
              <span className="hidden lg:block">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/categorias"}
              className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
              <span className="material-symbols-outlined">category</span>
              <span className="hidden lg:block">Categorías</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/productos"}
              className={({ isActive }) => (isActive ? "active" : "unActive")}
            >
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="hidden lg:block">Productos</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="flex items-center justify-between px-6 py-4 border-t dark:border-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
          <strong>Admin</strong>
        </span>
      </footer>
    </aside>
  );
};

export default Sidebar;
