import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md"

import '../../Styles/Pages/FAQ/FAQ.scss'
import Navbar from '../../Components/Navbar'
import Questions from './Question'

function FAQ() {
    return (
        <div className="FAQ">
            <Navbar />

            <div className="head">
                <MdOutlineQrCodeScanner />
                <span>FAQ</span>
            </div>

            <h2>Frequently Asked Questions</h2>
            <small>An FAQ section typically contains a list of questions and their corresponding answers..</small>

            <div className="FAQs">
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
            </div>
        </div>
    )
}

export default FAQ
