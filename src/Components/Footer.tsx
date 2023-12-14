import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail, MdCall } from "react-icons/md";

import '../Styles/Components/footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <section className='general'>
                <h1>YazaPay</h1>
                <p>Make secure payments with confidence, thanks to our advanced security system that safeguards your financial information. Conveniently top up your mobile device for uninterrupted connectivity. Store and manage your funds securely in a mobile wallet, providing easy access and control over your finances.</p>

                <ul>
                    <li>
                        <a href="tel:+234 000 000 000">
                            <MdCall />
                            <span> +234 000 000 000</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:example@gmail.com">
                            <MdEmail />
                            <span> example@gmail.com</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section className='usefull-links'>
                <h3>Usefull Links</h3>

                <Link to='/about'>About</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/contact'>Contact</Link>
            </section>

            <section className='social-links'>
                <h3>Social Links</h3>
                <Link to=''><FaFacebook /><span>Facebook</span></Link>
                <Link to=''><FaXTwitter /><span>Twitter</span></Link>
                <Link to=''><GrInstagram /><span>Instagram</span></Link>
                <Link to=''><BsLinkedin /><span>Linkedin</span></Link>
            </section>
        </div>
    )
}

export default Footer
