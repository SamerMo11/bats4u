import "../Css/about.css"
import "../Responsive/about.css"
import { motion } from "framer-motion"
import MainComp from "../Components/aboutComps"
import DoingComp from "../Components/doingComps"
import img1 from "../Assets/about/comps/1.webp"
import img2 from "../Assets/about/comps/2.webp"
import doing1 from "../Assets/about/sectio2/1.webp"
import doing2 from "../Assets/about/sectio2/2.webp"
import doing3 from "../Assets/about/sectio2/3.webp"
import doingHead from "../Assets/about/sectio2/head.webp"
export default function Shop() {
    const isMobile = window.innerWidth <= 768;



    const left =isMobile ? {
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
                x:-100
            },
            visible:{
                opacity: 1,
                x:0,
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
        className="aboutHero"
        id="aboutHero">
        </motion.div>
            
        <MainComp
            direction="row"
            align="start"
            img={img1}
            head="meet the founder"
            text1="Antonio Houston started his basketball journey in 2004 at the early age of 9, playing for a Police Athletic League team named the “The Heat.” His passion would take a back seat to school and a move which would eventually lead his family up north."
            text2="In 2010, his dreams would come true with a ball in one hand he took to the court. While at St. Anthony’s, one of the leading schools in the nation for basketball, he would assist in winning two state championships in 2011 and 2012. After high school he was accepted into Felician University, where he would continue to play the sport he loves for 4 years."
            text3="As a trainer, his goal is to teach young boys and girls how to achieve their dreams by hard work and dedication. While in training he will focus on ball handling, change of speed, shooting, and a host of other skills. By the end of training he would like for all his clients to be able to handle any challenge on and off the court."
            />

        <div className="doing">
                <motion.div
    variants={left} initial="hidden" whileInView="visible"
                
                className="img"><img src={doingHead} alt="what we do" loading="lazy"/></motion.div>
                <div className="doCont">
            <DoingComp
            img={doing1}
            head="meal plans"
            text="at bATS4U we offer customized meal plans to help you maintain athletic physique. during training it's important to amintain a strict meal regimen this will inhance your game."
            />  
            <DoingComp
            img={doing2}
            head="training programs"
            text="our programs are custom designed to ensure that you excel in every area of your athleticism."
            />  
            <DoingComp
            img={doing3}
            head="weight lifting strength"
            text="want to improve your skills in weight lifting & strength ? our trainers will create a one-on-one workout guide to help improve your skills!"
            />  
                </div>
        </div>




        <MainComp
            direction="row-reverse"
            align="start"
            img={img2}
            head="dedicated to taking others to the next level"
            text1="During Antonio’s high school and college career, Antonio had the privilege of working with several world renown trainers. Justin Zormelo, who has trained individuals such as Kevin Durant, Andrew Wiggins, and Rajon Rondo just to name a few. He’s also had the pleasure of working with Kevin Graham, who’s trained individuals such as Trey Burke, John Wall, and Dion Waiters."
            text2="While training with these great trainers he decided to try his hand at training in 2013. He was only 18 years old when he began to give back to the local elementary, middle, and high schools in his area. Antonio thought back to what one of his teachers taught him in school. Once you’ve master something if you can teach it to someone else then you really understand it inside and out. He’s been truly blessed to provide support to others and help them take their game to the next level. While he’s been privileged to train in many facilities, alongside some of the greatest trainers in the world."
            text3="His ultimate goal is to provide young people that nudge, encouragement, and knowledge they need, to not just be GOOD, but to be GREAT, at this game he holds so near and dear to his heart BASKETBALL."
            />    
            </>
    )
}