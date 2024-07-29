import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Profil } from './pages/Profil/profil'
import Layout from './layout/layout'
// import { Main } from './pages/Main/Main'
import { Login } from './pages/Login/login'
import { About } from './pages/About/about'
import { Announcement } from './pages/Announcement/announcement'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/Main/Main';
import { Filter } from './pages/Filter/Filter'




function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/home/main" />} />

      <Route path="home" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="profile" element={<Profil />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="filter" element={<Filter />} />
        <Route path="*" element={<Navigate to="/home/main" />} />
      </Route>
        
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>




    </Routes>
  )
}

export default App;
