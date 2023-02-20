import React from 'react'
import './search.css'
import { RiSearch2Line } from 'react-icons/ri'

const Search = (props) => {
    const isDark = props.isDark;
    return (
        <div className="input--fields">
            <input type='text' data-theme={isDark?"dark":""} className='input--text' onChange={props.promptChangeHandler} value={props.prompt} onKeyDown={e => {
                if(e.key == 'Enter'){
                    props.getdef();
                }
            }}/>
            <RiSearch2Line className='search--icon' onClick={props.getdef} data-theme={isDark?"dark":""}/>
        </div>
    )
}

export default Search