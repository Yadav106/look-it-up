import React from 'react'
import './search.css'
import searchIcon from '/search.svg'
import { RiSearch2Line } from 'react-icons/ri'

const Search = (props) => {
    return (
        <div className="input--fields">
            <input type='text' className='input--text' onChange={props.promptChangeHandler} value={props.prompt} onKeyDown={e => {
                if(e.key == 'Enter'){
                props.getdef();
                }
            }}/>
            <RiSearch2Line className='search--icon' onClick={props.getdef}/>
        </div>
    )
}

export default Search