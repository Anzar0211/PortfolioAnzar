import "./hero.scss"
import {motion} from "framer-motion"
const Hero = () => {
    const textVariants={
        initial:{
            x:-500,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1
            },
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },

    }
    const sliderVariants={
        initial:{
            x:0
        },
        animate:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20,
                

            }
        }
    }
    const scrollToContact=()=> {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollToPortfolio=()=> {
        const portfolioSection = document.getElementById('Portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate"> 
                <motion.h2 variants={textVariants}>MOHAMMAD ANZAR</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} onClick={scrollToPortfolio} whileHover="hover" whileTap="tap">
                        See Latest Works
                    </motion.button>
                    <motion.button variants={textVariants} onClick={scrollToContact} whileHover="hover" whileTap="tap">
                        Contact Me
                    </motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
            {/* <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">WELCOME</motion.div> */}
    </div>
  )
}
export default Hero