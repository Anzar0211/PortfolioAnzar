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
                <img src="/Pic.jpeg" alt="" />
                <p className="intro">
                    <motion.b whileHover={{color:"orange"}}>Hi! I am Mohammad Anzar</motion.b>
                    &nbsp;
                    A third-year B.Tech computer science student with a passion for Full Stack Development, Excel in JavaScript and C++. Specialized in the MERN stack backed by strong problem-solving skills. Dedicated for creating efficient and versatile software solutions. 
                    
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
                    
                     <div>Course Work:Data Structures and Algorithms,DBMS,OOPs</div>
                </p>
                <p>
                    <div>HTML,CSS,JavaScript</div>
                    
                </p>
                <p>
                    Tailwind CSS
                    <div>MERN Stack,Typescript,Redux</div>
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
                    <div>Btech,Computer Science and Information Technology-AKGEC Ghaziabad </div>
                </p>
                <br />
                <p>
                    <div>June-2021 (90.02%)</div>
                    <div>CLASS XII,Physics Chemistry Maths-St.Thomas School Ghaziabad </div>
                </p>
                <br />
               <p>
                    <div>Apr-2019 (85.00%)</div>
                    <div>CLASS X,St.Thomas School Indrapuram Ghaziabad </div>
                </p>
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About


{/* <p>
                    June-2021 (90.02%)
                    <div>CLASS XII,Physics Chemistry Maths-St.Thomas School Ghaziabad </div>
                </p>
                <br />
               <p>
                    Apr-2019 (85.00%)
                    <div>CLASS X,St.Thomas School Indrapuram Ghaziabad</div>
                </p> */}