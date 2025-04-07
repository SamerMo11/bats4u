import React from "react";
import { motion , useAnimation  } from "framer-motion";

export default function ShopProd({img , title , price  }) {

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
            y:-100
        },
        visible:{
            opacity: 1,
            y:0,
            transition: {
                duration: 1, 
            },
        }
    }


    const controls = useAnimation();

    const handleClick = async () => {
        await controls.start({ scale: 1.3, transition: { duration: 0.1 } });
        await controls.start({ scale: 1, transition: { duration: 0.1 } });
    };
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
            <motion.button
      animate={controls}
      onClick={handleClick}
        transition={{duration:.3}}

            >add to cart</motion.button>
        </motion.div>
  );
}