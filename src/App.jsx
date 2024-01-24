import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate, NavLink } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage/HomPage';
import NoMatch from './Pages/NoMatch/NoMatch';
import VideoDetails from './Pages/VideoDetails/VideoDetails';


function App() {
  const navbar = ['HOME', 'MÁS VISTO', 'SINGAJEVI', 'THEPORNDUDE', 'CONTACTS / DCMA']
  
  const footer = [
    {
      description: '18 USC 2257'
    },
    {
      description: 'Términos y condiciones' 
    },
    {
      description: 'Publicidad'
    },
    {
      description: 'Singajevi'
    },
    {
      description: 'Contact / dmca'
    },
    {
      description: 'Telegram'
    }
  ]
  return (
    
    <>
      <Search />
      <Navbar array={navbar} />
      <Routes>
            
            <Route exact path="/" element={<HomePage />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          
            <Route path='*' element={<NoMatch />} />  
                  
      </Routes>
      <Footer array={footer} />

    </> 
  )
}

export default App
