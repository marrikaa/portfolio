import React, { useState } from 'react'
import './MyProjects.css'
import hackTogether from '../images/projectsImages/hackTogether.png'
import foodHub from '../images/projectsImages/foodHub.png'
import quote from '../images/projectsImages/quotes.png'
import {AiFillGithub} from 'react-icons/ai'
import {MdWebhook} from 'react-icons/md'


export const MyProjects = () => {

    return (
        <div className='projects-container'>

            <div className='project-item-card flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                <a href="https://hacktogether-ec643.web.app/"  target="_blank"><img src={hackTogether} alt="" className='project-cover' /></a></div>
                <div className="flip-card-back">
                <p className='project-description'><h1 className='color'>HachTogether</h1>The website is a dedicated platform for developers to connect, collaborate, and find exciting project opportunities.<br /> Developers can register and create their profiles, highlighting their skills, experience, and areas of interest. <br />
                    The platform offers a project listing section where developers can explore various projects available. Additionally, developers have the option to create their own projects and define open positions or roles within those projects.<br />
                    Other developers who are interested in a particular project can apply for the open positions. The project owner reviews the applications and selects the most suitable candidate for each position.<br />
                    Once a developer is accepted for a position, a chat is automatically opened, providing a dedicated communication channel for the team members to collaborate effectively. The chat feature enables real-time conversations<br/ >
                     This website aims to foster a vibrant community where developers can find projects aligned with their skills and interests, and project owners can attract talented individuals to their teams. The combination of project listings, open positions, and chat functionality ensures a streamlined and efficient process for developers to connect, apply, and collaborate on projects.</p> 
                     </div> 
                <div className='links'>
                    <a href='https://github.com/marrikaa/hack-together' target='_blank' > 
                        <AiFillGithub  className='icon' />
                    </a>
                    <a href='https://hacktogether-ec643.web.app/' target='_blank' >
                        <MdWebhook className='icon' />
                    </a>
                </div>
            </div>
            </div>

            <div className='project-item-card'>
            <a href='https://foodhub-825ed.web.app/'  target="_blank"><img src={foodHub} alt="" className='project-cover' /></a>
                <p className='project-description'><h1 className='color'>FoodHub</h1>The website is a versatile platform for all things related to food and cooking. Users can search for recipes by name, 
                    allowing them to quickly find specific dishes they are interested in preparing. Additionally, 
                    the website offers a unique feature where users can search for recipes based on the ingredients they have on hand. 
                    This functionality enables users to discover new recipes and make the most of their available ingredients.
                    The website also provides a space for users to write and share food blogs. Users can create their own blogs, sharing their culinary experiences, 
                    recipes, cooking tips, and food-related stories. They can engage with other users by reading and commenting on their blogs, fostering a community of food enthusiasts.
                    Whether users are looking for specific recipes, seeking inspiration, or interested in reading and sharing food blogs, this website serves as a comprehensive platform to 
                    satisfy their culinary interests and connect with like-minded individuals.</p>
            <div className='links'>
                <a href='https://github.com/marrikaa/FoodHub' target='_blank' > 
                    <AiFillGithub  className='icon' />
                </a>
                <a href='https://foodhub-825ed.web.app/' target='_blank' >
                    <MdWebhook className='icon' />
                </a>
            </div>
            
            </div>

            <div className='project-item-card'>
                <a href=''  target="_blank"><img src={quote} alt=""  className='project-cover'/></a>
            <p className='project-description'><h1 className='color'>Quotopia</h1>The application is a user-friendly platform that allows users to explore and collect inspirational quotes. Users can easily search for quotes based on different themes, topics, or authors. They can browse through a curated collection of quotes and add their favorites to a personal list.
                The application also offers a feature where users can contribute by adding their own quotes to their personal list. This allows users to save and reflect upon their own words of wisdom, affirmations, or memorable lines they come across.
                In addition to adding quotes, users have the flexibility to remove any quotes from their list that they no longer wish to keep. This ensures that the list remains personalized and relevant to each user's taste and preferences.
                Overall, the application provides a convenient and organized way for users to discover, collect, and curate their favorite quotes. It empowers users to find inspiration, save meaningful quotes, and even contribute their own uplifting words to their collection.</p>
            <div className='links'>
                <a href='https://github.com/marrikaa/Quotes-Generator' target='_blank' > 
                    <AiFillGithub  className='icon' />
                </a>
                <a href='https://github.com/marrikaa/hack-together' target='_blank' >
                    <MdWebhook className='icon' />
                </a>
            </div>
            
            
            </div>
        </div>
    )
}