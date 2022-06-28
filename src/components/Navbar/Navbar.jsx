import {React,useState} from 'react'
import './navbar.css'


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const getActiveLink = (value) => {
        setActiveLink(value);
      }
    const[navbar,setNavbar]=useState(false)
    const changeBackground=()=>{
        console.log(window.scrollY)
        if(window.scrollY>=150){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }

    }
    window.addEventListener('scroll',changeBackground);






  return (
    <div>
<header className={navbar?'navbar active':'navbar'}>
    <nav>
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