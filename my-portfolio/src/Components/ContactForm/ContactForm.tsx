import React from 'react';
import './ContactForm.css'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {TfiLocationPin} from 'react-icons/tfi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from  'react-icons/hi'
import {TbSend} from 'react-icons/tb'
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

export const ContanctForm = () => {
    return (
        <motion.section 
        initial={{scaleY: 0}}
        animate ={{ scaleY:1 }}
        exit ={{scaleY :0}}
        transition={{ duration: 0.5 }}
        className="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          <form className="form-horizontal contact-form" action="https://formsubmit.co/988e7a4c678bc79436eb3cad1ff870fd"  method="POST" target="_blank">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" name="username"  required />
                <input type="email" className="form-control" placeholder="Email" name="email"  required />
                <textarea className="form-control" rows={10} placeholder="Message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary send-button" id="submit" value="SEND" >
              <div className="alt-send-button">
               <TbSend  className='form-icon' />
               <span className="send-text">SEND</span>
              </div>
            </button> 
          </form>
          
            <div className="direct-contact-container">
                <div className="list-item">
                  <TfiLocationPin className='contact-icon' />
                  <span className="contact-text">Amsterdam, Netherlands</span>
                </div>
                 <div className="list-item">
                    <BsFillTelephoneFill className='contact-icon' />
                    <span className="contact-text">(+31) 6 16480225</span>
                </div>
                <div className="list-item">
                    <HiOutlineMail className='contact-icon' />
                    <span className="contact-text">
                      <a href="mailto:MarikaGachechiladze0@gmail.com" title="Send me an email">
                        MarikaGachechiladze0@gmail.com</a>
                    </span>
                </div>      
            <hr />
            <div className="social-media-list">
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank" rel="noreferrer">
                    <AiFillGithub className='icon' /></a>
                <a href="https://www.linkedin.com/in/marika-gachechiladze-573778224/" target="_blank" rel="noreferrer">
                    <BsLinkedin className='icon' /></a>
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank" rel="noreferrer" >
                    <FaHackerrank className='icon'  />
                </a>
                <a href="mailto:MarikaGachechiladze0@gmail.com">
                        <MdEmail className='icon' />
                    </a>
            </div>
            <hr />
            </div>
        </div>
      </motion.section>  
    )
}