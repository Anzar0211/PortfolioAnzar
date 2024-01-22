import "./portfolio.scss"
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react"
const items=[
    {
        id:1,
        title:"YelpCamp campgrounds",
        img:"https://images.pexels.com/photos/5994385/pexels-photo-5994385.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi fuga similique voluptates ad asperiores placeat. Eum voluptatum atque nihil, harum ipsam numquam ducimus. Provident placeat maiores perspiciatis veniam repellendus."
    },
    {
        id:2,
        title:"Next JS App",
        img:"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi fuga similique voluptates ad asperiores placeat. Eum voluptatum atque nihil, harum ipsam numquam ducimus. Provident placeat maiores perspiciatis veniam repellendus."
    },
    {
        id:1,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi fuga similique voluptates ad asperiores placeat. Eum voluptatum atque nihil, harum ipsam numquam ducimus. Provident placeat maiores perspiciatis veniam repellendus."
    },
    {
        id:1,
        title:"React App",
        img:"https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi fuga similique voluptates ad asperiores placeat. Eum voluptatum atque nihil, harum ipsam numquam ducimus. Provident placeat maiores perspiciatis veniam repellendus."
    },
]
const Single=({item})=>{
    const ref=useRef()
    const{scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]})
    const y=useTransform(scrollYProgress,[0,1],["0%","-300%"])
    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref=useRef()
    const{scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]})
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {
        items.map(item=>(
            <Single key={item.id} item={item}/>
        ))
    } </div>
  )
}
export default Portfolio