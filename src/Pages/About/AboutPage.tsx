import React from 'react'
import About from '../Home/About'
import Navbar from '../../Components/Navbar'
import '../../Styles/Pages/about.scss'
import Testimonials from '../Home/Testimonials'

function AboutPage() {

  document.title = 'About'

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-section">
        <About />
      </div>
      <Testimonials />
    </div>
  )
}

export default AboutPage
