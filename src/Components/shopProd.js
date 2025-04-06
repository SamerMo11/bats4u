import React from "react";
import { motion } from "framer-motion";
export default function shopProd({img , title , price  }) {

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



  return (
    <motion.div
     variants={reveal}
     initial="hidden"
     whileInView="visible"
    className="prodCard">
        <div><img src={img} alt="Sample" /></div>
            <div className="texts">
            <p>{title}</p>
            <p>{price}</p>
            </div>
            <button>add to cart</button>
        </motion.div>
  );
}