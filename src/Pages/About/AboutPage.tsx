import About from '../Home/About'
import Navbar from '../../Components/Navbar'
import '../../Styles/Pages/about.scss'
import Footer from '../../Components/Footer'

function AboutPage() {

  document.title = 'YazaPay - About'

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-section">
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
