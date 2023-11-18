import React from 'react'
import { MdOutlineQrCodeScanner, MdPayment, MdMoreTime } from "react-icons/md"
import { TbShieldLock } from "react-icons/tb";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { ImUserCheck } from "react-icons/im";
import { BsBank2 } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";

import '../../Styles/Pages/Home/security.scss'
import map from '../../assets/map.webp'

function Security() {
    return (
        <div className="security">
            <div className="our-security">

                <div className="head">
                    <TbShieldLock />
                    <span>security</span>
                </div>

                <h2>5 Ways to Security System</h2>
                <small>We provide some awesome features thats helpful.</small>

                <div className="cards">

                    <div className="card">
                        <AiOutlineSolution />
                        <div>
                            <h3>KYC Solution</h3>
                            <p>Protect sensitive information with our GDPR compliant tech - no server connection needed.</p>
                        </div>
                    </div>
                    <div className="card">
                        <HiOutlineFingerPrint />
                        <div>
                            <h3>Two Factor Authentication</h3>
                            <p>2FA, is an extra layer of protection used to ensure the security of online accounts beyond just a username and password.</p>
                        </div>
                    </div>
                    <div className="card">
                        <GiPadlock />
                        <div>
                            <h3>End-to-End Encryption</h3>
                            <p>End-to-end encryption is a system of communication where only the users communicating can read the messages.</p>
                        </div>
                    </div>
                    <div className="card">
                        <TbShieldLock />
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
                        <ImUserCheck />
                        <div>
                            <h3>Convenience</h3>
                            <p> your account balances, locate ATM machines, transact money transfers, and conveniently add funds through check deposits.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdMoreTime />
                        <div>
                            <h3>Timesaving</h3>
                            <p> There is no need to physically go to a credit union branch to carry out the daily tasks mentioned earlier.</p>
                        </div>
                    </div>
                    <div className="block">
                        <BsBank2 />
                        <div>
                            <h3>Bank on the go</h3>
                            <p> There is no need to physically go to a credit union branch to carry out the daily tasks mentioned earlier.</p>
                        </div>
                    </div>
                    <div className="block">
                        <MdPayment />
                        <div>
                            <h3>Payment</h3>
                            <p>Make your monthly bill payments effortless by scheduling automatic payments with a hassle-free setup process.</p>
                        </div>
                    </div>
                    <div className="block">
                        <LuNewspaper />
                        <div>
                            <h3>e-Statement</h3>
                            <p> Obtain electronic or hard copies of your financial statements to keep for tax or personal records. and more.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Security
