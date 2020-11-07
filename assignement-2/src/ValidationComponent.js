import React from 'react';

const ValidationComponent = (props) => {
    
    let wordLength;
    if (props.length < 5) {
        wordLength = 'Text too short';
    } else {
        wordLength = 'Text is long enough';
    }

    return (
        <div>
            { wordLength}
        </div>
    );
};

export default ValidationComponent;