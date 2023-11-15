import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md"

import '../../Styles/Pages/Home/about.scss'
import scan from '../../assets/scan.webp'

function About() {
    return (
        <div className="about">

            <div className="work">
                <div className="head">
                    <MdOutlineQrCodeScanner />
                    <span>How It Works</span>
                </div>

                <h2>Simply follow the moves toward</h2>
                <small>It's simpler than you suspect. Follow 4 straightforward simple tasks.</small>

                <div className="steps">
                    <div className="step">
                        <div className="icon">
                            <MdOutlineQrCodeScanner />
                        </div>
                        <span className="num">step 1</span>
                        <p>Create your Account</p>
                    </div>
                    <div className="step">
                        <div className="icon">
                            <MdOutlineQrCodeScanner />
                        </div>
                        <span className="num">step 1</span>
                        <p>Create your Account</p>
                    </div>
                    <div className="step">
                        <div className="icon">
                            <MdOutlineQrCodeScanner />
                        </div>
                        <span className="num">step 1</span>
                        <p>Create your Account</p>
                    </div>
                    <div className="step">
                        <div className="icon">
                            <MdOutlineQrCodeScanner />
                        </div>
                        <span className="num">step 1</span>
                        <p>Create your Account</p>
                    </div>


                </div>
            </div>


            <div className="about-company">
                <img src={scan} alt="" />
                <div>
                    <div className="head">
                        <MdOutlineQrCodeScanner />
                        <span>About Company</span>
                    </div>

                    <h2>Quick, Secure Cash Moves Installment Door With QR</h2>

                    <p>QR code support refers to the ability of a device, application, or system to recognize and read QR codes. This support can be provided through a variety of methods, such as through built-in camera software, specialized QR code scanning apps, or integrated QR code reading functionality within other applications. In such cases, it's important to ensure that the QR code is compatible with a wide range of devices and platforms to maximize its effectiveness.</p>

                    <div className="jobs">
                        <div className="job">
                            <MdOutlineQrCodeScanner />

                            <div>
                                <h3>Money Transfer</h3>
                                <p>Money transfer refers to the process of sending money from one person or entity to another</p>
                            </div>

                        </div>
                        <div className="job">
                            <MdOutlineQrCodeScanner />

                            <div>
                                <h3>Money Transfer</h3>
                                <p>Money transfer refers to the process of sending money from one person or entity to another</p>
                            </div>

                        </div>
                        <div className="job">
                            <MdOutlineQrCodeScanner />

                            <div>
                                <h3>Money Transfer</h3>
                                <p>Money transfer refers to the process of sending money from one person or entity to another</p>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
