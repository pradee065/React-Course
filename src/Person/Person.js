import React from 'react';

const Person = (props) => {
    return (
    <div>
    <p>{props.name} aged {props.age} is eligble to vote</p>
    <p>{props.children}</p>
    </div>
    )
}

export default Person;