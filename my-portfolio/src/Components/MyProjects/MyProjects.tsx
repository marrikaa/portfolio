import './MyProjects.css'
import hackTogether from '../images/projectsImages/hackTogether.png'
import foodHub from '../images/projectsImages/foodHub.png'
import quote from '../images/projectsImages/quotes.png'
import {AiFillGithub} from 'react-icons/ai'
import {MdWebhook} from 'react-icons/md'
import { motion } from 'framer-motion'


export const MyProjects = () => {
    return (
        <motion.div    
        initial={{scaleY: 0}}
        animate ={{ scaleY:1 }}
        exit ={{scaleY :0}}
        transition={{ duration: 0.5 }} 
        className='projects-container'>

    <div className='project-item-card'>
    <a href='https://foodhub-825ed.web.app/'  target="_blank" rel="noreferrer"><img src={foodHub} alt="" className='project-cover' /></a>
        <h2 className='color'>FoodHub</h2>
        <p className='project-description'>The website is a versatile platform for all things related to food and cooking. 
            Users can search for recipes by name or based on the ingredients they have on hand. 
            The website also provides a space for users to write and share food blogs.
            Whether users are looking for specific recipes, seeking inspiration, or interested in reading and sharing food blogs, 
            this website serves as a comprehensive platform to 
            satisfy their culinary interests and connect with like-minded individuals.
        </p>
        <div className='social-media-list'>
            <a href='https://github.com/marrikaa/FoodHub' target='_blank' rel="noreferrer" > 
                <AiFillGithub  className='icon' />
            </a>
            <a href='https://foodhub-825ed.web.app/' target='_blank' rel="noreferrer"  >
                <MdWebhook className='icon' />
            </a>
        </div>     
    </div>
    <div className='project-item-card'>        
     <a href="https://hacktogether-ec643.web.app/"  target="_blank"><img src={hackTogether} alt="" className='project-cover' /></a>
        <h2 className='color'>HachTogether</h2>
        <p className='project-description'>
            This website aims to foster a vibrant community where developers 
            can find projects aligned with their skills and interests, 
            and project owners can attract talented individuals to their teams. 
            The combination of project listings, open positions, and chat functionality ensures a 
            streamlined and efficient process for developers to connect, apply, and collaborate on projects.
        </p>     
        <div className='social-media-list'>
            <a href='https://github.com/marrikaa/hack-together' target='_blank' > 
                    <AiFillGithub  className='icon' />
            </a>
        </div>
    </div>
    <div className='project-item-card'>            
        <a href=''  target="_blank"><img src={quote} alt=""  className='project-cover'/></a>
        <h2 className='color'>Quotopia</h2>
        <p className='project-description'>
            The application is a user-friendly platform that allows users to explore and collect inspirational quotes. 
            The application provides a convenient and organized way for users to discover, collect, and curate their favorite quotes. 
            It empowers users to find inspiration, save meaningful quotes, and even contribute their own uplifting words to their collection.
        </p> 
        <div className='social-media-list'>
            <a href='https://github.com/marrikaa/Quotes-Generator' target='_blank' > 
                <AiFillGithub  className='icon' />
            </a>
        </div>  
    </div>
        </motion.div>
    )
}