import { motion } from 'framer-motion'
import './AboutMe.css'


export const AboutMe = () => {

    return (
        <motion.div    
        initial={{scaleY: 0}}
        animate ={{ scaleY:1 }}
        exit ={{scaleY :0}}
        transition={{ duration: 0.5 }} >
            <p className='about-me'>Hello there! I'm a highly motivated individual with a 
        master's degree in mathematics and a passion for programming. 
        I'm currently transitioning my expertise in mathematics to the world of software development, 
        with a specific interest in becoming a junior full-stack developer.<br /><br />
        During my academic journey, I developed a strong foundation in mathematical principles, 
        critical thinking, and problem-solving skills. I thrived in the analytical nature of mathematics, 
        which allowed me to cultivate a meticulous attention to detail and a logical approach to tackling complex challenges.<br /><br />
        Recognizing the growing demand for programming skills in various industries, I decided to broaden my horizons and delve into the exciting world of coding. 
        I have embarked on a dedicated learning journey to become proficient in several programming languages, 
        frameworks, and technologies relevant to full-stack development. I am adept at languages such as 
        JavaScript, TypeScript and C#, and I have experience with popular frameworks like React and .NET<br /><br />
        As a lifelong learner, I am enthusiastic about continuously enhancing my programming abilities and staying up to date with the latest industry trends.
        I am familiar with concepts such as data structures, algorithms, object-oriented programming, and relational databases, and I am always eager to expand my knowledge further.<br /><br />
        I possess excellent communication skills and thrive in collaborative environments.
        I enjoy working as part of a team, leveraging collective strengths to develop innovative and efficient solutions. 
        I am also a self-starter and have honed my ability to work independently, ensuring timely delivery of projects with a keen eye for quality and accuracy.<br /><br />
        While I may be at the beginning of my journey as a full-stack developer, my strong foundation in mathematics and my passion for programming provide me with a unique perspective and a tenacious problem-solving mindset. 
        I am excited to bring my analytical skills and attention to detail to the world of software development and contribute to building exceptional applications.<br /><br />
        I am now actively seeking opportunities to apply my knowledge and skills as a junior full-stack developer. I am eager to join a team that values growth, collaboration, and continuous learning. 
        If you're looking for a dedicated and motivated individual who combines a mathematical background with programming expertise, I would love to connect and discuss how I can contribute to your organization's success.<br /><br />
    </p>
        </motion.div>
    )
}