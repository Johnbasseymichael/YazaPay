import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md"

import '../../Styles/Pages/Home/security.scss'
import map from '../../assets/map.webp'

function Security() {
    return (
        <div className="security">
            <div className="our-security">

                <div className="head">
                    <MdOutlineQrCodeScanner />
                    <span>security</span>
                </div>

                <h2>5 Ways to Security System</h2>
                <small>We provide some awesome features thats helpful.</small>

                <div className="cards">

                    <div className="card">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>SMS or Email Verification</h3>
                            <p>Both email and SMS make for more secure authentication, but there are pros and cons to everything.</p>
                        </div>
                    </div>
                    <div className="card">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>SMS or Email Verification</h3>
                            <p>Both email and SMS make for more secure authentication, but there are pros and cons to everything.</p>
                        </div>
                    </div>
                    <div className="card">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>SMS or Email Verification</h3>
                            <p>Both email and SMS make for more secure authentication, but there are pros and cons to everything.</p>
                        </div>
                    </div>
                    <div className="card">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>SMS or Email Verification</h3>
                            <p>Both email and SMS make for more secure authentication, but there are pros and cons to everything.</p>
                        </div>
                    </div>
                    <div className="card">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>SMS or Email Verification</h3>
                            <p>Both email and SMS make for more secure authentication, but there are pros and cons to everything.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="overview">
                <div className="head">
                    <MdOutlineQrCodeScanner />
                    <span>Overview</span>
                </div>
                <h2>In 2023, a financial institution generated $6.8 billion in income </h2>
                <small>Have you ever finally just gave in to the temptation and read your horoscope in the newspaper.</small>
                <img src={map} alt="" />

                <div className="conclude">
                    <div>
                        <h1>11+</h1>
                        <span>Payment Gateway </span>
                    </div>
                    <div>
                        <h1>11+</h1>
                        <span>countries </span>
                    </div>
                    <div>
                        <h1>11+</h1>
                        <span>Send Remittance</span>
                    </div>
                </div>

                <p>Financial institutions play a vital role as they serve as a platform for exchange money.</p>

            </div>

            <div className="why-us">
                <div className="head">
                    <MdOutlineQrCodeScanner />
                    <span>WHY CHOOSE US</span>
                </div>

                <h2>Finances Through Secure Banking Practices</h2>
                <small>Essential for protecting your money and personal information. Here are some tips to help you maintain financial security.</small>

                <div className="blocks">

                    <div className="block">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdOutlineQrCodeScanner />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Security
