import "./app.scss"
import About from "./components/About/About";
// import Cursor from "./components/cursor/cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Test from "./Test";
const App = () => {
  return (<div>
    {/* <Cursor/> */}
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><Parallax type="about"/></section> 
    <section><About/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    
  </div>);
};

export default App;
