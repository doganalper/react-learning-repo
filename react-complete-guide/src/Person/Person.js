// Fonksiyon ile component oluşturmak. (stateless comp olarak da geçer)
// JSX kullandığımız için React'i import ederiz.
import React from 'react';
import classes from './Person.css';


const person = (props) => {
    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;