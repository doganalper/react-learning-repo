import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="userName">Username: {props.username}</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
};

export default UserOutput;