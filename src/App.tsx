import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './Styles/App.css'
import Home from './Pages/Home/Home'
import AboutPage from './Pages/About/AboutPage';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact';


function App() {

  return (

    <div className="app">
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
