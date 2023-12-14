import {  useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop(Children:any) {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(Children);
        
        window.scrollTo(0, 0);
    }, [pathname]);

return null
}

export default ScrollToTop
