import { MdOutlineQrCodeScanner } from "react-icons/md"
import { FaStar } from "react-icons/fa";

import person from '../../assets/person.webp'
import '../../Styles/Pages/Home/testimonials.scss'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="head">
                <MdOutlineQrCodeScanner />
                <span>Testimonials</span>
            </div>

            <h2> What People Say About Us</h2>
            <small> Testimonials are statements or reviews from satisfied customers or clients that demonstrate their positive experiences with business.</small>

            <div className="testimonies">

                <div className="testimony">
                    <div className="profile">
                        <img src={person} alt="" />
                        <div className="name">
                            <p> John Doe</p>
                            <span>Support</span>
                        </div>
                    </div>

                    <div className="msg">
                        <h4>send money system</h4>
                        <p>Reliable, efficient, secure, and cost-effective. Remittance refers to the transfer of money from one country to another, typically for the purpose of supporting family or friends in another location.
                        </p>
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
                
                <div className="testimony">
                    <div className="profile">
                        <img src={person} alt="" />
                        <div className="name">
                            <p> John Doe</p>
                            <span>Support</span>
                        </div>
                    </div>

                    <div className="msg">
                        <h4>send money system</h4>
                        <p>Reliable, efficient, secure, and cost-effective. Remittance refers to the transfer of money from one country to another, typically for the purpose of supporting family or friends in another location.
                        </p>
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>

                <div className="testimony">
                    <div className="profile">
                        <img src={person} alt="" />
                        <div className="name">
                            <p> John Doe</p>
                            <span>Support</span>
                        </div>
                    </div>

                    <div className="msg">
                        <h4>send money system</h4>
                        <p>Reliable, efficient, secure, and cost-effective. Remittance refers to the transfer of money from one country to another, typically for the purpose of supporting family or friends in another location.
                        </p>
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
