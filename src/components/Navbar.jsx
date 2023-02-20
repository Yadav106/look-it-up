import React from 'react';
import logo from '/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='inner'>
            <img src={logo} className='logo'/>
            <p className="title--navbar">LOOK IT UP</p>
        </div>
    </div>
  )
}

export default Navbar