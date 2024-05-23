
import "./contact.scss"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {motion } from "framer-motion"
import { useState } from "react";
const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1
    }
  }
}
const Contact = () => {
  const formRef=useRef()
  const[error,setError]=useState(false)
  const[success,setSuccess]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_740knj9', 'template_df16h7p', formRef.current, 'C-p74h1lFDyGXqrTP')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          setError(true)
      });
  };
  return (
    <div className="contact" >
      <div className="textContainer" >
        <h1>Let's Work Together</h1>
        
        <div className="item" >
          <h2>Mail</h2>
          <span>anzarkhan790@gmail.com</span>
        </div>
        <div className="item" >
          <h2>College</h2>
          <span>Ajay Kumar Garg Engg. College 27th KM Milestone,<br/></span>
          <span>Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201015</span>
        </div>
        <div className="item" >
          <h2>Phone</h2>
          <span>8368554479</span>
        </div>
        <div className="social">
            <a href="https://www.linkedin.com/in/mohd-anzar-783060227"><img src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/Anzar0211"><img src="/Github-1.png" alt="" /></a>
            <a href="https://anzar0211.github.io/Resume/"><img src="/resume.png" alt="" /></a>
        </div>
      </div>
      
      <div className="formContainer">
      <h3>Contact Me</h3>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required name="name"/>
          <input type="email" placeholder="Email" required name="email"/>
          <textarea rows="10" placeholder="message" required name="message"/>
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </form>
      </div>
    </div>
  )
}
export default Contact