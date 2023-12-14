
import '../../Styles/Pages/Home/home.scss'
import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Security from './Security'
import Footer from '../../Components/Footer'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Features />
            <About />
            <Security />
            <Footer />
        </div>
    )
}

export default Home
