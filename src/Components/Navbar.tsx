import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMenu, MdCancel } from "react-icons/md";


import '../Styles/Components/navbar.scss'
import JoinListModal from './JoinListModal';

function Navbar() {
    const location = useLocation();

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showWaitList, setShowWaitList] = useState(false)

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // PUSH USER INFO





    // https://jsonplaceholder.typicode.com/posts



    return (
        <>
            <div className={`navbar  ${scrollPosition > 100 ? 'hide' : ''} ${scrollPosition > 200 ? 'fixed' : ''} ${showMobileMenu && "show"}`}>
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
                        <button onClick={() => setShowWaitList(true)}>Join wait list</button>
                    </div>



                </div>
            </div>


            <div className={`jwl ${showWaitList && 'show-modal'}`} >
                <div className={`jwl-inner-modal ${showWaitList && 'scale-up'}`}>
                    <MdCancel onClick={() => setShowWaitList(false)} />
                    <JoinListModal />
                </div>
                
            </div>

        </>
    )
}

export default Navbar
