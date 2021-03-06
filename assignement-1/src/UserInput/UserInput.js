import React from 'react';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" value={props.username} onChange={props.setUsername}/>
        </div>
    );
};

export default UserInput;