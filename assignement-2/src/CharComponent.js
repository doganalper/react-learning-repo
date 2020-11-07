import React from 'react';

const CharComponent = (props) => {
    return (
        <div className="Char" onClick={props.removeChar}>
            {props.character}
        </div>
    );
};

export default CharComponent;