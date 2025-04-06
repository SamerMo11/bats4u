import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function homeComps({img , text1 , text2 , direction = "row" }) {
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
    const right =isMobile ? {
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
            x:100
        },
        visible:{
            opacity: 1,
            x:0,
            transition: {
                duration: 1, 
            },
        }
    }



  return (
    <div className="homeComp"  style={{flexDirection: direction}}>
      <motion.img
        variants={reveal} initial="hidden" whileInView="visible"
      src={img} alt="Sample" />
      <motion.div
        variants={right} initial="hidden" whileInView="visible"
      >
      <h3>{text1}</h3>
      <p>{text2}</p>
      <Link to="/">read more</Link>
      </motion.div>
    </div>
  );
}