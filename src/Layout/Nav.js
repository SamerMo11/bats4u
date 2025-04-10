import "../Css/nav.css"
import "../Responsive/nav.css"
import { Link   } from "react-router-dom"
import { useState } from "react";
import logo from "../Assets/main/logo.webp"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


export default function Nav({ cartItems, removeFromCart, getTotalPrice }) {


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
        // setIsActive(!isActive);
        
    };
    const [isActive, setIsActive] = useState(false); 
    const cartClick = () => {
      setIsActive(!isActive);
    };
    return(
        <nav>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="links">
                <Link to="/"  className={activeLink === "/" ? "active" : ""}  onClick={() => { handleClick("/"); handleScroll("homeHero");}} >home</Link>
                <Link to="/shop"  className={activeLink === "/shop" ? "active" : ""} onClick={() => {handleClick("/shop") ; handleScroll("shopHero");}}>shop</Link>
                <Link to="/about"  className={activeLink === "/about" ? "active" : ""} onClick={() => {handleClick("/about") ; handleScroll("aboutHero");}}>about</Link>
                <button onClick={cartClick}   className={`cart-button ${isActive ? 'active' : ''}`}>cart</button>
                  </div>








            <div  className={`cart ${isActive ? 'active' : ''}`}>
        {cartItems.length === 0 ? (
          <p style={{ padding: "10px" }}>Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="details" key={index}>
              <img src={item.img} alt="productImg" />
              <div className="det">
                <p>{item.title}</p>
                <span>{item.price} $</span>
              </div>
              <button onClick={() => removeFromCart(index)}>X</button>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="total">
            <p>Total: {getTotalPrice()} $</p>
          </div>
        )}
      </div>
        </nav>
    )
}