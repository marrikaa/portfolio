import './MySkills.css'
import {  motion } from 'framer-motion'

export const MySkills = () => {
    const frontEndStacks = ["HTML","CSS","JavaScript", "React", "Redux", "Next.js", "jQuery"];
    const backEndStacks = ["Node.js", "Express.js","C#",".NET", "Entity Framework (EF) Core", "MySQL", "MongoDB", "Mongoose", "Firebase"];
    const otherStacks = ["Git", "GitHub", "TypeScript", "VS Code", "TDD", "Jest", "Mocha", "Cypress"];

    return (
        <motion.div    
        initial={{scaleY: 0}}
        animate ={{ scaleY:1 }}
        exit ={{scaleY :0}}
        transition={{ duration: 0.5}}
        className='skills'>
                <div className='frontend-stacks'>
                    <div className='skill-title'>
                        <h3>Front End</h3>
                        <hr />
                    </div>
                    {frontEndStacks.map(stack => <div className='skill-name'>{stack}</div> )}
                </div>
                <div className='backend-stacks'>
                <div className='skill-title'>
                        <h3>Back End</h3>
                        <hr />
                    </div>
                    {backEndStacks.map(stack => <div className='skill-name'>{stack}</div> )}
                </div>
                <div className='other-stacks'>
                <div className='skill-title'>
                        <h3>Others</h3>
                        <hr />
                    </div>
                    {otherStacks.map(stack => <div className='skill-name'>{stack}</div> )}  
                </div>

          
        </motion.div>
    )
}
