// Layout.jsx
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;