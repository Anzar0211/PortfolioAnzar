import "./Navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <Sidebar/>
            </div>
        </div>
    )
}
export default Navbar
