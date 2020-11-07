import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
    <div className="Person">
    <p onClick={props.click}>{props.name} aged {props.age} is eligble to vote</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
    )
}

export default Person;