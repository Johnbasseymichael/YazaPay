import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

import '../Styles/Components/navbar.scss'

function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar">
            <div className="container">

                <div className="left-col">
                    <Link to={'/'}>
                        <h1>YazaPay</h1>
                    </Link>
                </div>

                <div className="middle-col">
                    <nav>
                        <Link to={'#'} className={location.pathname === '/' ? 'active' : ''} >home</Link>
                        <Link to={'#'} className={location.pathname === '/' ? 'active' : ''}>about</Link>
                        <Link to={'#'} className={location.pathname === '/' ? 'active' : ''}>services</Link>
                        <Link to={'#'} className={location.pathname === '/' ? 'active' : ''}>FAQ</Link>
                        <Link to={'#'} className={location.pathname === '/' ? 'active' : ''}>contact</Link>
                    </nav>
                </div>

                <div className="right-col">
                    <button>Log In</button>
                </div>

                <div className="menu-icon">
                    <MdOutlineMenu />
                </div>

            </div>
        </div>
    )
}

export default Navbar
