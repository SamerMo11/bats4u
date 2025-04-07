import "../Css/shop.css"
import "../Responsive/shop.css"
import { motion } from "framer-motion"
import { prods } from "../Data/ShopData/shop"
import ShopProd from "../Components/shopProd"
export default function Shop() {

    const prodCards = prods.map((el)=>
            <ShopProd key={el.key} img={el.img} title={el.title} price={el.price} /> )


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
        <>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration:1, delay:.2}}
        className="shopHero"
        id="shopHero"
        >
        </motion.div>


        <motion.div 
        className="cardsCont"
        >
            <motion.p
        variants={reveal} initial="hidden" whileInView="visible"
            
            >meet our special products</motion.p>
            <div className="cards">
            {prodCards}
            </div>
        </motion.div>
        </>

    )
}