import React from 'react'
import './error.css'
import { MdError } from 'react-icons/md'

const Error = () => {
  return (
    <div className="error">
        <p className='error--text'>Error 404</p>
        <p className="error--text">We were not able to find your word.</p>
        <MdError className='error--icon'/>
    </div>
  )
}

export default Error