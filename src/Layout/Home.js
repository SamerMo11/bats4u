import "../Css/home.css"
import "../Responsive/home.css"
import img1 from "../Assets/home/main comps/1.webp"
import img2 from "../Assets/home/main comps/2.webp"
import img3 from "../Assets/home/main comps/3.webp"
import num1 from "../Assets/home/nums/1.webp"
import num2 from "../Assets/home/nums/2.webp"
// import num3 from "../Assets/home/nums/3.webp"
import MainComp from "../Components/homeComps";
import ProgComp from "../Components/homeProg";
import { progs } from "../Data/HomeData/prog"
import { motion } from "framer-motion"

export default function Home(){

        const progCards = progs.map((el)=>
        <ProgComp key={el.key} img={el.img} text={el.title} /> )

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
    // const right =isMobile ? {
    //     hidden:{
    //         opacity: 0,
    //     },
    //     visible:{
    //         opacity: 1,
    //         transition: {
    //             duration: 1, 
    //         },
    //     }
    // }:{
    //     hidden:{
    //         opacity: 0,
    //         x:100
    //     },
    //     visible:{
    //         opacity: 1,
    //         x:0,
    //         transition: {
    //             duration: 1, 
    //         },
    //     }
    // }


    return(
        <>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration:1, delay:.2}}
        className="hero"></motion.div>
        <div className="sec-1">
            <motion.img
            variants={reveal} initial="hidden" whileInView="visible"
            src={num1} alt="num1" loading="lazy"/>
            <MainComp
            direction="row"
            img={img1}
            text1="meet our founder"
            text2="Antonio Houston started his basketball journey in 2004 at the early age of 9, playing for a Police Athletic League team named the “The Heat.” His passion would take a back seat to school and a move which would eventually lead his family up north…"
            />
        </div>
        <div className="sec-2">
            <motion.img
            variants={reveal} initial="hidden" whileInView="visible"
            
            src={num2} alt="num2" loading="lazy"/>
            <motion.div className="progCont">
              {progCards}
            </motion.div>
        </div>
        <div className="sec-3">
        <MainComp
            direction="row-reverse"
            img={img2}
            text1="bats4u summer camp"
            text2="Where young athletes come to hone their skills, build friendships, and ignite their passion for the game. Our camp is designed for boys and girls of all skill levels, from beginners to advanced players, ages 8 to 16. Led by experienced coaches and former professional players, our camp offers a comprehensive basketball experience in a fun and supportive environment."
            />
            <MainComp
            direction="row"
            img={img3}
            text1="bats4U all in one package deal"
            text2="Whether you’re a student-athlete, a recreational player, or someone who simply loves the game, my goal is to help you maximize your potential and enjoy basketball to the fullest with our All-In-One package deal"
            />
        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{duration:1, delay:.2}}
        className="foot"></motion.div>


        </>
    )
}