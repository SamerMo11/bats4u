import React from "react";
import { motion } from "framer-motion";

export default function AboutComps({img , head , text}) {
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
    
    variants={reveal} initial="hidden" whileInView="visible"
    className="DoingCard">
        <motion.div className="img"><motion.img  src={img} alt="Sample" /></motion.div>
      <motion.div className="texts">
      <h3>{head}</h3>
      <p>{text}</p>
      </motion.div>
    </motion.div>
  );
}