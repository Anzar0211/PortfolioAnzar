import {motion, useInView} from "framer-motion"
import { useRef } from "react"
import "./about.scss"
 const variants={
        initial:{
            x:-500,
            y:100,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }
const About = () => {
  const ref=useRef()
  const isInView=useInView(ref,{margin:"-100px"}) 
  return (
    <motion.div className="about" variants={variants} initial="initial" ref={ref}animate="animate">
        {/* <motion.div className="textContainer" variants={variants}>
            <p>Lorem ipsum dolor sit <br />
             amet consectetur.</p>
             <hr />
        </motion.div> */}
        <motion.div className="titleContainer" variants={variants}>
            {/* <div className="title"> */}
                <img src="/people.webp" alt="" />
                <p className="intro">
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b>
                    &nbsp;
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates atque unde et explicabo quam aliquam error aspernatur fugiat aliquid! Dolorum distinctio consequatur numquam amet! Aliquid vitae reiciendis perferendis praesentium recusandae.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    
                </p>
            {/* </div> */}
            {/* <div className="title">
                
                <p>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                </p>
                
            </div> */}

        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Skills</h2>
                <p>
                    
                    <div>Course WorkData Structures and Algorithms,DBMS,OOPs,</div>
                </p>
                <p>
                    
                    <div>Course WorkData Structures and Algorithms,DBMS,OOPs,</div>
                </p>
                <p>
                    Course Work
                    <div>Data Structures and Algorithms,DBMS,OOPs,</div>
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Experience</h2>
                <p>
                    Full Stack Developer at ABC Company (June 21 - Present)
                </p>
                <p>
                    Full Stack Developer at ABC Company (June 21 - Present)
                </p>
                <p>
                    Full Stack Developer at ABC Company (June 21 - Present)
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Education</h2>
                <p>
                    Sep 2021-July 2025
                    <div>Btech,Computer Science and Information Technology-Akgec Ghaziabad </div>
                </p>
                <p>
                    Sep 2021-July 2025
                    <div>Btech,Computer Science and Information Technology-Akgec Ghaziabad </div>
                </p>
                <p>
                    Sep 2021-July 2025
                    <div>Btech,Computer Science and Information Technology-Akgec Ghaziabad </div>
                </p>
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About