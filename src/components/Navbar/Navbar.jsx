import "./Navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <Sidebar/>
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration: 0.5}}>XYZ</motion.span>
               
            </div>
        </div>
    )
}
export default Navbar
