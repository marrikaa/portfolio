import { useNavigate } from 'react-router-dom';
import'./NavBar.css'




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

    const redirectToHomePage = async() => {
        try{
            navigate(`/`)  
          }catch{
              console.error();    
          }
    }

  return (
        <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><div className='home-element' onClick={redirectToHomePage}>Home</div></li>
                    <li> <div className='home-element' onClick={redirectToAboutMe}>About</div></li>
                    <li> <div className='home-element' onClick={redirectToMySkills}>Skills</div></li>
                    <li><div className='home-element' onClick={redirectToMyProjects}>Projects</div></li>
                </ul>
        </header >
    )
}