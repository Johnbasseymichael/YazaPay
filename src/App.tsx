import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './Styles/App.css'
import Home from './Pages/Home/Home'

function App() {

  return (

    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
