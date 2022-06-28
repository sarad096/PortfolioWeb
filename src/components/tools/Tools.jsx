import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
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


<IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}>

  <AiFillHtml5 className="logo--size--adjust" />
 
  
</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}>

  <IoLogoCss3 className="logo--size--adjust"/>
 
  
</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

  <SiJavascript className="logo--size--adjust" />
  

 
  
</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<BsFillBootstrapFill className="logo--size--adjust"/>
  

 
  
</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<SiTailwindcss className="logo--size--adjust" />
  

 
  
</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<DiMongodb className="logo--size--adjust"/>
  

 
  
</IconContext.Provider>


      </div>





      <div className='tools-icon-wrapper'>
      <IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}>

<SiExpress className="logo--size--adjust"/>


</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"100px", className: "global-class-name" }}>

<DiReact className="logo--size--adjust"/>


</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<FaNodeJs className="logo--size--adjust" />




</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<FaGitAlt className="logo--size--adjust" />




</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<FiFigma className="logo--size--adjust"/>




</IconContext.Provider>
<IconContext.Provider value={{ color: "black", size:"80px", className: "global-class-name" }}>

<SiAdobeillustrator className="logo--size--adjust"/>




</IconContext.Provider>

      </div>
</div>
     
        
    </div>
  )
}

export default Tools