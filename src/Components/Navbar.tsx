import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

import '../Styles/Components/navbar.scss'

function Navbar() {
    const location = useLocation();

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className={`navbar ${scrollPosition > 200 ? 'fixed' : ''} ${showMobileMenu && "show"}`}>
            <div className="container">

                <div className="left-col">
                    <Link to={'/'}>
                        <h1>YazaPay</h1>
                    </Link>

                    <div onClick={() => setShowMobileMenu(prev => !prev)} className="menu-icon">
                        <MdOutlineMenu />
                    </div>
                </div>

                <div className={`middle-col`}>
                    <nav>
                        <Link to={'/'} className={location.pathname === '/' ? 'active' : ''} >home</Link>
                        <Link to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>about</Link>
                        <Link to={'/faq'} className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
                        <Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : ''}>contact</Link>
                    </nav>
                </div>

                <div className="right-col">
                    <button>Log In</button>
                </div>



            </div>
        </div>
    )
}

export default Navbar
