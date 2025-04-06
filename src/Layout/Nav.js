import "../Css/nav.css"
import { Link } from "react-router-dom"
import logo from "../Assets/main/logo.webp"
export default function Nav() {
    return(
        <nav>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/shop">shop</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </div>
        </nav>
    )
}