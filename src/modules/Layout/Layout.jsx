import { Outlet } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;