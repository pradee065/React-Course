import React from 'react';

const Person = (props) => {
    return (
    <div>
    <p onClick={props.click}>{props.name} aged {props.age} is eligble to vote</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change}/>
    </div>
    )
}

export default Person;