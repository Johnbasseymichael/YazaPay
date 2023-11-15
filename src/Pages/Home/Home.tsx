import React from 'react'

import '../../Styles/Pages/Home/home.scss'
import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Security from './Security'
import Testimonials from './Testimonials'

// import 
function Home() {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Features />
            <About/>
            <Security/>
            <Testimonials/>
        </div>
    )
}

export default Home
