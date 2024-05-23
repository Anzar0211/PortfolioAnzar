import "./portfolio.scss"
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react"
const items=[
    {
        id:1,
        title:"YelpCamp campgrounds",
        img:"https://images.pexels.com/photos/5994385/pexels-photo-5994385.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"YelpCamp is a web app for campers to find and share info on campgrounds. Discover new spots, leave reviews, and contribute to a growing database for the outdoor community.",
        link:"https://yelpcamp-1yy4.onrender.com/"
    },
    {
        id:2,
        title:"Goalpost Gazette",
        img:"https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Goalpost Gazette delivers in-depth analysis, news, and commentary for the passionate football fan. Dive deeper into the beautiful game with insightful stories, discussions, and expert takes. Whether you're a die-hard supporter or a casual observer, Goalpost Gazette is your one-stop shop for all things football.",
        link:"https://goalpost-gazette.onrender.com/"
    },
    {
        id:3,
        title:"Traditions to Trends",
        img:"https://t2t.onrender.com/static/media/logote2t.475aea3d.png",
        desc:"Traditions to Trends curates modern takes on classic Indian traditions. Find handcrafted goods, homeware, and trendy accessories - a vibrant fusion of heritage and style. Shop now!",
        link:"https://t2t.onrender.com/"
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
                        <button><motion.a href={item.link} target="_blank" rel="noopener noreferrer">See Demo</motion.a></button>
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