import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './style/Navbar.css' 

function Navbar() {
    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true);

    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true)
        }
    }
    window.addEventListener('resize',showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <NavLink   to="/ " className="navbar logo">
            <div className="logo"> <i className="fas fa-car"></i>    Cal Motors</div>
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <NavLink exact to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About us
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/find' className='nav-links' onClick={closeMobileMenu}>
                        Find Vehicle
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/finance' className='nav-links' onClick={closeMobileMenu}>
                        Finance
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/broker-service' className='nav-links' onClick={closeMobileMenu}>
                        Broker Service
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact us
                    </NavLink>
                </li>
                
            </ul>
           
            </div>
        </nav> 
        </>
    )
}

export default Navbar
