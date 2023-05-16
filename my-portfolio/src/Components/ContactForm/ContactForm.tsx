import React from 'react';
import './ContactForm.css'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {TfiLocationPin} from 'react-icons/tfi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from  'react-icons/hi'
import {TbSend} from 'react-icons/tb'

export const ContanctForm = () => {

   const formSubmitHandler=(event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const { username, email, message  } = event.currentTarget;
        username.value = '';
        email.value = '';
        message.value = '';
      }
    return (
        <section className="contact">
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
              <ul className="contact-list">
                <li className="list-item">
                    <TfiLocationPin className='contact-icon' />
                    <span className="contact-text place">Amsterdam, Netherlands</span></li>
                 <li className="list-item">
                    <BsFillTelephoneFill className='contact-icon' />
                    <span className="contact-text phone">(+31) 6 16480225</span>
                </li>
                <li className="list-item">
                    <HiOutlineMail className='contact-icon' />
                    <span className="contact-text gmail">
                        <a href="mailto:MarikaGachechiladze0@gmail.com" title="Send me an email">
                            MarikaGachechiladze0@gmail.com</a></span>
                </li>      
              </ul>
            <hr />
            <div className="social-media-list">
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank" className="contact-icon">
                    <AiFillGithub  /></a>
                <a href="https://www.linkedin.com/in/marika-gachechiladze-573778224/" target="_blank" className="contact-icon" >
                    <BsLinkedin  /></a>
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank">
                    <FaHackerrank  />
                </a>
            </div>
            <hr />
            </div>
        </div>
      </section>  
    )
}