import {React,useState} from 'react'
import './navbar.css'


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const getActiveLink = (value) => {
        setActiveLink(value);
      }
    const[navbar,setNavbar]=useState(false)
    const changeBackground=()=>{
        // console.log(window.scrollY)
        if(window.scrollY>=150){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }

    }
    window.addEventListener('scroll',changeBackground);

    const [isNavExpanded, setIsNavExpanded] = useState(false)




  return (
    <div>
<header className={navbar?'navbar active':'navbar'}>
<button className="hamburger"
onClick={() => {
    setIsNavExpanded(!isNavExpanded);
  }}
>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    <nav className= {isNavExpanded ? "navigation-menu expanded" : "navigation-menu"} >
        <ul className="nav-links">
            <li >
                
                
            <a href="#home" className={activeLink === 'home' ? 'isactive' : ''} onClick={() => getActiveLink('home')}>Home</a>
                
                
                
                </li>
            <li>
            <a href="#project" className={activeLink === 'projects' ? 'isactive' : ''} onClick={() => getActiveLink('projects')}>Projects</a>
                
                </li>
            <li>
                
            <a href="#tool" className={activeLink === 'tools' ? 'isactive' : ''} onClick={() => getActiveLink('tools')}>Tools</a>
                
                </li>
            <li>
                
            <a href="#contact" className={activeLink === 'contact' ? 'isactive' : ''} onClick={() => getActiveLink('contact')}>Contact</a>
                
                </li>
        </ul>
    </nav>
</header>



    </div>
  )
}

export default Navbar