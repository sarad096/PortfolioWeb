import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import {FaHtml5,FaCss3,FaCss3Alt,FaJs,FaBootstrap,FaReact,FaFigma} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {DiMongodb,DiReact} from 'react-icons/di'
import{FaNodeJs,FaGitAlt} from 'react-icons/fa'
import{FiFigma} from 'react-icons/fi'
import {SiTailwindcss,SiExpress,SiJavascript,SiAdobeillustrator}from 'react-icons/si'

import "./tools.css"
import { IconContext } from "react-icons";
const Tools = () => {
  return (
    <div id='tool'>
      <div className="tool-title">
        <h1 className='tools-heading'>TOOLS</h1>
      </div>
<div className="tools-icon-container">
<div className='tools-icon-wrapper'>


{/* <IconContext.Provider value={{ color: "red", size:"100px", className: "global-class-name" }}> */}

  <FaHtml5 className="logo--size--adjust html5" />
 
  
{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "blue", size:"100px", className: "global-class-name" }}> */}

  <FaCss3Alt className="logo--size--adjust css3"/>
 
  
{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "#EAD41C", size:"100px", className: "global-class-name" }}> */}

  <FaJs className="logo--size--adjust javascript" />
  

 
  
{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "C", size:"100px", className: "global-class-name" }}> */}

<FaBootstrap className="logo--size--adjust bootstrap"/>
  

 
  
{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<SiTailwindcss className="logo--size--adjust tailwind" />
  

 
  
{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<DiMongodb className="logo--size--adjust mongodb"/>
  

 
  
{/* </IconContext.Provider> */}


      </div>





      <div className='tools-icon-wrapper'>
      {/* <IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}> */}

<SiExpress className="logo--size--adjust expressjs"/>


{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<FaReact className="logo--size--adjust react"/>


{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<FaNodeJs className="logo--size--adjust nodejs" />




{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<FaGitAlt className="logo--size--adjust git" />




{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}> */}

<FaFigma className="logo--size--adjust figma"/>




{/* </IconContext.Provider> */}
{/* <IconContext.Provider value={{ color: "", size:"100px", className: "global-class-name" }}> */}

<SiAdobeillustrator className="logo--size--adjust adobeillustrator"/>




{/* </IconContext.Provider> */}

      </div>
</div>
     
        
    </div>
  )
}

export default Tools