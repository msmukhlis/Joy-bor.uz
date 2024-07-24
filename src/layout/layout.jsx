// layout/layout.jsx
import React from 'react';
import { Navbar } from '../components/Navbar/navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/footer';
import BannerSlice from '../pages/Main/BannerSlice';
import { Main } from '../pages/Main/Main';

// import Navbar from '../components/Navbar/Navbar'; // Adjust import path if needed

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
