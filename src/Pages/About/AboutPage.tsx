import React from 'react'
import About from '../Home/About'
import Navbar from '../../Components/Navbar'
import '../../Styles/Pages/about.scss'
import Testimonials from '../Home/Testimonials'
import Footer from '../../Components/Footer'

function AboutPage() {

  document.title = 'YazaPay - About'

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-section">
        <About />
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default AboutPage
