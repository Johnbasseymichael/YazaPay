import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './Styles/App.css'
import Home from './Pages/Home/Home'
import AboutPage from './Pages/About/AboutPage';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';


function App() {

  return (

    <div className="app">
      {/* <ScrollToTop> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      {/* </ScrollToTop> */}
    </div>
  )
}

export default App
