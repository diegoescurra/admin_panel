// Layout.js con Outlet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main  className="rounded-lg bg-white shadow-sm ml-20 lg:ml-56 p-7 lg:min-h-lvh w-full sm:w-auto">
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;
