import React from 'react';
import logo from '/logo.svg'
import './navbar.css'
import { BiSun, BiMoon } from 'react-icons/bi'

const Navbar = (props) => {
  return (
    <div className="navbar">
        <div className='inner'>
            <img src={logo} className='logo'/>
            <p className="title--navbar">LOOK IT UP</p>
        </div>
        {
          props.isDark ? 
          <BiMoon className='theme' onClick={props.toggleDark}/> :
          <BiSun className='theme' onClick={props.toggleDark}/>
        }
    </div>
  )
}

export default Navbar