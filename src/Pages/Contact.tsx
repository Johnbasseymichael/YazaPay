import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";


import '../Styles/Pages/contact.scss'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
    document.title = 'YazaPay - Contact Us'

    return (
        <div className="contact">
            <Navbar />

            <div className="contact-container">

                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <p>Please use the feedback form to get in touch with us if you have any inquiries or requests. Within a few hours, the administrator will respond to your inquiry. </p>

                    <div className="other-info">

                        <div className="info-block">
                            <MdEmail />
                            <div className="info">
                                <h3> Email us directly</h3>
                                <p> support@example.com</p>
                            </div>
                        </div>

                        <div className="info-block">
                            <MdCall />
                            <div className="info">
                                <h3> Call us on: +234234234234</h3>
                                <p> Our office hours are Monday - Friday, 9 am-6 pm</p>
                            </div>
                        </div>

                        <div className="info-block">
                            <MdLocationOn />
                            <div className="info">
                                <h3>  Our Location</h3>
                                <p> 20-22 Wenlock Road, London, England, N1 7GU </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="form">
                    <form>
                        <div className='form-inner'>
                            <div className="inp">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder='Enter Your Name' />
                            </div>

                            <div className="inp">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder='Enter Your Email' />
                            </div>

                            <div className="inp">
                                <label htmlFor="phone">Phone</label>
                                <input type="number" id="phone" placeholder='Enter Your Phone Number' />
                            </div>

                            <div className="inp">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder='Enter Your Subject' />
                            </div>

                            <div className="inp">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder='Write your Message...'></textarea>
                            </div>
                        </div>

                        <button>Submit</button>
                    </form>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Contact
