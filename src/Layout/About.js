import "../Css/shop.css"
import "../Responsive/shop.css"
import { motion } from "framer-motion"

export default function Shop() {
    const isMobile = window.innerWidth <= 768;

    const reveal = isMobile ? {
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 1, 
            },
        }
    }:{
        hidden:{
            opacity: 0,
            y:100
        },
        visible:{
            opacity: 1,
            y:0,
            transition: {
                duration: 1, 
            },
        }
    }
    
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration:1, delay:.2}}
        className="hero"></motion.div>
    )
}