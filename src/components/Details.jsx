import React from 'react'
import './details.css'
import { nanoid } from 'nanoid'

const Details = (props) => {
    const element = props.element;
    const definitions = element['definitions']
    const synonyms = element['synonyms']
    const antonyms = element['antonyms']

    return (
    <div className="details">
        <div className="pos">
            <p className="speech">{element['partOfSpeech']}</p>
            <hr className='hor--line'/>
        </div>
        <div className="meanings">
        <p className="title">Meanings</p>
        <ul>
            {
                definitions.map(item => {
                    return <li key={nanoid()} className='list--item'>{item['definition']}</li>
                })
            }
        </ul>
        </div>
        {
            synonyms.length == 0
            ?
            ""
            :
            <div className="synonyms">
                <p className="title">Synonyms :&nbsp;&nbsp; </p>
                <ul>
                {synonyms.map(syn => {
                    return <li key={nanoid()} className='list--item'>{syn}</li>
                })}
                </ul>
            </div>
        }
        {
            antonyms.length == 0
            ?
            ""
            :
            <div className="antonyms">
                <p className="title">Antonyms :&nbsp;&nbsp; </p>
                <ul>
                {antonyms.map(ant => {
                    return <li key={nanoid()} className='list--item'>{ant}</li>
                })}
                </ul>
            </div>
        }
    </div>
    )
}

export default Details