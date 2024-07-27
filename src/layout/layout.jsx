// layout/layout.jsx
import React from 'react';
import { Navbar } from '../components/Navbar/navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/footer';
import BannerSlice from '../pages/Main/BannerSlice';
import { Main } from '../pages/Main/Main';
import { Filter } from '../pages/Filter/Filter';
import { Login } from '../pages/Login/login';
// import { Filter } from '../pages/Filter/Filter';
// import { Filter } from './pages/Filter/Filter'

// import Navbar from '../components/Navbar/Navbar'; // Adjust import path if needed

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <Filter /> 

        
        <Login />

      <Main>
        <Outlet />
      </Main>
      
      <Footer />
    </>
  );
};

export default Layout;
