import React from 'react'
import './error.css'
import { MdError } from 'react-icons/md'

const Error = (props) => {

  const isDark = props.isDark;

  return (
    <div className="error">
        <p className='error--text' data-theme={isDark?"dark":""}>Error 404</p>
        <p className="error--text" data-theme={isDark?"dark":""}>We were not able to find your word.</p>
        <MdError className='error--icon' data-theme={isDark?"dark":""}/>
    </div>
  )
}

export default Error