import React from 'react';
import './navbar.css'
import { BiSun, BiMoon } from 'react-icons/bi'
import { RiBookReadFill } from 'react-icons/ri'

const Navbar = (props) => {
  const isDark = props.isDark;
  return (
    <div className="navbar">
        <div className='inner'>
            <RiBookReadFill className='logo' data-theme={isDark?"dark":""}/>
            <p className="title--navbar" data-theme={isDark?"dark":""}>LOOK IT UP</p>
        </div>
        {
          props.isDark ? 
          <BiMoon className='theme' onClick={props.toggleDark} data-theme={isDark?"dark":""}/> :
          <BiSun className='theme' onClick={props.toggleDark} data-theme={isDark?"dark":""}/>
        }
    </div>
  )
}

export default Navbar