import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md"

import heroImg from '../../assets/heroImg.webp'
import playStore from '../../assets/play-store.png'
import appleStore from '../../assets/apple-store.png'
import '../../Styles/Pages/Home/hero.scss'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>

            <div className="hero-text">
                <h4><MdOutlineQrCodeScanner /><span>A Machine-Readable Code</span></h4>

                <h1>Transfer Money With The QRCode In A Second</h1>

                <p>Our innovative payment solution allows you to transfer money quickly and securely using QR codes. With just a simple scan, you can send or receive funds in a matter of seconds, eliminating the need for manual entry or tedious account details.</p>

                <div className="btns">
                    <button>
                        <img src={playStore} alt="" />
                        <div>
                            <p>get it on </p>
                            <span>Google Store</span>
                        </div>
                    </button>

                    <button>
                        <img src={appleStore} alt="" />
                        <div>
                            <p>get it on </p>
                            <span>Apple Store</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
