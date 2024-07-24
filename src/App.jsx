import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Profil } from './pages/Profil/profil'
import Layout from './layout/layout'
import { Main } from './pages/Main/Main'
import { Login } from './pages/Login/login'
import { About } from './pages/About/about'
import { Announcement } from './pages/Announcement/announcement'
import { Filter } from './pages/Filter/filter'

function App() {

  return (
    <Routes>
     <Route path='/' element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="profile" element={<Profil />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="filter" element={<Filter />} />
        {/* <Route index path="*" element={<Navigate to="/" />} /> */}

      </Route>

      
      

  </Routes>
  )
}

export default App
