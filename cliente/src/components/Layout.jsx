// Layout.js con Outlet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main  className="rounded-lg shadow-sm ml-20 lg:ml-56 p-7">
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;
