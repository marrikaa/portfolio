import profilePicture from '../images/marika.png'
import './HomePage.css'
import { IoMdOpen } from 'react-icons/io';
import {BiMailSend} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
    const redirectToContactForm = async() => {
        try{
            navigate(`/contactForm`)  
          }catch{
              console.error();    
          }
    }
    return (
        <>
        <div className='homepage'>
            <span><img src={profilePicture} alt="profile" className='profile-picture' /></span>
            <div className='homepage-text'>
                <h1>Turning vision into reality</h1>
                <p>As skilled full-stack developer, I am dedicated to turn <br />
                ideas into innovative Web applications.<br /> 
                    Explore my latest projects</p>
                <div className='home-header'>
                <a href={'/MarikaGachechiladze.pdf'} target="_blank" 
                rel="noopener noreferrer" className='resume'>Resume<IoMdOpen /></a>
                <a className='resume' onClick={redirectToContactForm}>Let's Contact<BiMailSend /></a></div>
            </div>
        </div></>
    )
}