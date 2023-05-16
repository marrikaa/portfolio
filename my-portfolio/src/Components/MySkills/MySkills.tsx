import React, { useState } from 'react'
import './MySkills.css'
import javaScriptLogo from '../images/JavaScript-logo.png'
import csharpLogo from '../images/csharp-logo.png'
import reactLogo from '../images/React-icon.svg.png'
import typeScriptLogo from '../images/TypeScript.png'
import dotNETLogo from '../images/dotNet.png'
import entityLogo from '../images/csharp-logo.png'
import NodeJSLogo from '../images/TypeScript.png'
import cypressLogo from'../images/cypress-logo.png'
import jestLogo from '../images/jest.png'
import TDDLogo from '../images/TDD.png'
import fireBaseLogo from '../images/firebase.png'
import expressLogo from '../images/express-js.png'
import mySQLLogo from'../images/mySQL.png'
import reduxLogo from '../images/redux.png'
import htmlLogo from '../images/html5.png'
import cssLogo from '../images/cssLogo.png'
import restApiLogo from '../images/rest-api.png'
import mochaLogo from '../images/mocha.png'
import sqlServerLogo from '../images/SQL-logo.png'


export const MySkills = () => {
    const skills=[{
        name:"JavaScript",
        src :javaScriptLogo
    },
    {
        name:"TypeScript",
        src :typeScriptLogo
    },
    {
        name:"React",
        src :reactLogo
    },
    {
        name:"C#",
        src :csharpLogo
    },
    {
        name:"ASP.NET Core",
        src :dotNETLogo
    },
    {
        name:"Entity Framework",
        src :entityLogo
    },
    // {
    //     name:"SQL Server",
    //     src :sqlServerLogo
    // },
    {
        name:"Node.JS",
        src :NodeJSLogo
    },
    {
        name:"Express.JS",
        src: expressLogo
    },
    {
        name:"REST",
        src :restApiLogo
    },
    {
        name:"MySQL",
        src :mySQLLogo
    },
    {
        name:"Redux",
        src :reduxLogo
    },
    {
        name:"HTML",
        src :htmlLogo
    },
    {
        name:"CSS",
        src :cssLogo
    },
    {
        name:"Cypress",
        src :cypressLogo
    },
    {
        name:"Mocha",
        src :mochaLogo
    },
    {
        name:"Jest",
        src :jestLogo
    },
    {
        name:"TDD",
        src: TDDLogo
    },
    {
        name: "FireBase",
        src: fireBaseLogo
    },
]
    

    return (
        <div className='skills'>
            {skills.map(skill => <div className='each-element'>
            <img className="skill-logo" src={skill.src} />
            <h3 className='skill-name'>{skill.name}</h3></div>)}
        </div>
    )
}
