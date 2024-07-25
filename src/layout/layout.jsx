import { Navbar } from '../components/Navbar/navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
