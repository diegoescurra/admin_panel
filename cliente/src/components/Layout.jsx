// Layout.js con Outlet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main  className="rounded-lg border bg-card text-card-foreground shadow-sm ml-56">
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;
