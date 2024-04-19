// Layout.js con Outlet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='flex max-w-full overflow-y-hidden'>
      <Sidebar />
      <main className="flex-grow rounded-lg bg-white shadow-sm p-7 w-full h-auto">
  <Outlet /> 
</main>
    </div>
  );
};

export default Layout;
