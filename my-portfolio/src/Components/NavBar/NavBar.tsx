import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./NavBar.css'
import linkedinIcon from '../images/socialIcons/linkeDin.png'
import hackerRankIcon from '../images/socialIcons/hackerRank.png'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'



export const NavBar = () => {
    const navigate = useNavigate()

    const redirectToAboutMe = async() => {
        try{
            navigate(`/aboutMe`)  
          }catch{
              console.error();    
          }
    }
    const redirectToMySkills = async() => {
        try{
            navigate(`/mySkills`)  
          }catch{
              console.error();    
          }
    }
    const redirectToMyProjects = async() => {
        try{
            navigate(`/myProjects`)  
          }catch{
              console.error();    
          }
    }
    const redirectToContactInfo = async() => {
        try{
            navigate(`/contactInfo`)  
          }catch{
              console.error();    
          }
    }
    const redirectToHomePage = async() => {
        try{
            navigate(`/`)  
          }catch{
              console.error();    
          }
    }

  return (
    <div className='navbar-elements'>
        <div className="home">
            <div className='home-element' onClick={redirectToHomePage}>Home</div>
            <div className='home-element' onClick={redirectToAboutMe}>About</div>
            <div className='home-element' onClick={redirectToMySkills}>Skills</div>
            <div className='home-element' onClick={redirectToMyProjects}>Projects</div>
            {/* <div className='home-element' onClick={redirectToContactInfo}>Let's Contact</div> */}
        </div>
        {/* <div className='menu-icon home-element'><HiMenu />
            <div className='home-element' onClick={redirectToHomePage}>Home</div>
            <div className='home-element' onClick={redirectToAboutMe}>About</div>
            <div className='home-element' onClick={redirectToMySkills}>Skills</div>
            <div className='home-element' onClick={redirectToMyProjects}>Projects</div>
            {/* <div className='home-element' onClick={redirectToContactInfo}>Let's Contact</div> */}
        {/* </div></div> */} 
        <div className='social-icons'>
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank" className='icon' >
                    <AiFillGithub  className='icon' /></a>
                <a href="https://www.linkedin.com/in/marika-gachechiladze-573778224/" target="_blank" className='icon' >
                    <BsLinkedin  className='icon' /></a>
                <a href="https://www.hackerrank.com/marikagachechil1" target="_blank">
                    <FaHackerrank className='icon' />
                </a>
            </div>
    </div>
    
    )
}