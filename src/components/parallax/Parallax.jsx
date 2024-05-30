import { motion,useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Mountains from '../../../dist/mountains.png';
import Stars from '../../../dist/stars.png'
import "./parallax.scss"
const Parallax = ({type}) => {
  const ref=useRef()
  const{scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
  })
  const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])
  const yBG=useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <div className="parallax"
    ref={ref}
     style={{background:
        type==="about"?"linear-gradient(180deg,#0c0c1d,#111132)"
        :"linear-gradient(180deg,#0c0c1d,#505064)"
    }}>
        <motion.h1 style={{y:yText}}>{type==="about"?"About Me":"My Projects"}</motion.h1>
        <motion.div className="mountains">
          {/* <img src={Mountains} alt="" /> */}
        </motion.div>
        <motion.div style={{y:yBG,backgroundImage:`url(${type==="about"?"./planets.png":"./sun.png"})`}} className="planets"></motion.div>
        <motion.div className="stars">
          <img src={Stars} alt="" />  
        </motion.div>     
        
    </div>
  )
}
export default Parallax