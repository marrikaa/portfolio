import profilePicture from '../images/marika.png'
import './HomePage.css'
import { IoMdOpen } from 'react-icons/io';
import {BiMailSend} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import Typed from "typed.js";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HomePage = () => {
    const navigate = useNavigate();
    const redirectToContactForm = async() => {
        try{
            navigate(`/contactForm`)  
          }catch{
              console.error();    
          }
    }

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer", "Back End Developer", "Full-Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <>
        <motion.div    
        initial={{scaleY: 0}}
        animate ={{ scaleY:1 }}
        exit ={{scaleY :0}}
        transition={{ duration: 0.5 }}
            className='homepage'>
            <span><img src={profilePicture} alt="profile" className='profile-picture' /></span>
            <div className='homepage-text'>
                <h3>Hello it's me </h3>
                <h1>Marika Gachechiladze</h1>
                <h3>And I'm a &nbsp;<span className='title' ref={el}/></h3>
                <p className='short-description'> I'm a highly motivated individual with a master's degree in mathematics and a passion for programming.<br />I'm currently transitioning my expertise in mathematics to the world of software development, <br />with a specific interest in becoming a junior full-stack developer.</p>
                <div className='social-media-list'>
                    <a href="https://github.com/marrikaa" target="_blank" >
                        <AiFillGithub  className='icon' /></a>
                    <a href="https://www.linkedin.com/in/marika-gachechiladze-573778224/" target="_blank" >
                        <BsLinkedin  className='icon' /></a>
                    <a href="https://www.hackerrank.com/marikagachechil1" target="_blank">
                        <FaHackerrank className='icon' />
                    </a>
                    <a href="mailto:MarikaGachechiladze0@gmail.com">
                        <MdEmail className='icon' />
                    </a>
                </div>
                <div className='home-header'>
                <a href={"/Marika's Resume.pdf"} target="_blank" 
                rel="noopener noreferrer" className='resume'>Resume<IoMdOpen /></a>
                <a className='resume' onClick={redirectToContactForm}>Let's Contact<BiMailSend /></a></div>
            </div>
        </motion.div>
        </>
    )
}