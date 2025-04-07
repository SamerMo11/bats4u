import "../Css/nav.css"
import { Link   } from "react-router-dom"
import { useState } from "react";
import logo from "../Assets/main/logo.webp"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function Nav() {


    const navigate = useNavigate();

    // تحسين الكود باستخدام useCallback لتقليل إعادة إنشاء الدالة
    const handleScroll = useCallback((sectionId) => {
        navigate("/#"); // العودة للصفحة الرئيسية
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [navigate]);







    const [activeLink, setActiveLink] = useState("/");

    const handleClick = (link) => {
      setActiveLink(link);
    };
    return(
        <nav>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="links">
                <Link to="/"  className={activeLink === "/" ? "active" : ""}  onClick={() => { handleClick("/"); handleScroll("homeHero");}} >home</Link>
                <Link to="/shop"  className={activeLink === "/shop" ? "active" : ""} onClick={() => {handleClick("/shop") ; handleScroll("shopHero");}}>shop</Link>
                <Link to="/about"  className={activeLink === "/about" ? "active" : ""} onClick={() => {handleClick("/about") ; handleScroll("aboutHero");}}>about</Link>
                <Link to="/contact"  className={activeLink === "/contact" ? "active" : ""} onClick={() => {handleClick("/contact") ; handleScroll("contactHero");}}>contact</Link>
            </div>
        </nav>
    )
}