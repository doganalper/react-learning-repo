import React, { useEffect, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = React.useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            toggleBtnRef.current.click();
        }, 1000)
        
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work 2nd in useEffect');
        }
    })

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{ props.title }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
                { props.showPersons ? 'Toggle Persons' : 'Show Persons'}
            </button>
            <button onClick={authContext.login}>Login</button>
        </div>  
    );
};

export default React.memo(cockpit);