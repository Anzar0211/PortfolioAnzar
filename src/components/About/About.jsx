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
        <motion.div className="textContainer" variants={variants}>
            <p>Lorem ipsum dolor sit <br />
             amet consectetur.</p>
             <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                </h1>
                <button>What We Do</button>
            </div>

        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates atque unde et explicabo quam aliquam error aspernatur fugiat aliquid! Dolorum distinctio consequatur numquam amet! Aliquid vitae reiciendis perferendis praesentium recusandae.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates atque unde et explicabo quam aliquam error aspernatur fugiat aliquid! Dolorum distinctio consequatur numquam amet! Aliquid vitae reiciendis perferendis praesentium recusandae.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates atque unde et explicabo quam aliquam error aspernatur fugiat aliquid! Dolorum distinctio consequatur numquam amet! Aliquid vitae reiciendis perferendis praesentium recusandae.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates atque unde et explicabo quam aliquam error aspernatur fugiat aliquid! Dolorum distinctio consequatur numquam amet! Aliquid vitae reiciendis perferendis praesentium recusandae.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About