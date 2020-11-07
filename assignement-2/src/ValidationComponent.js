import React, { Component } from 'react';

class ValidationComponent extends Component {
    render() {
        let wordLength;
        if (this.props.length < 5) {
            wordLength = 'Text too short';
        } else {
            wordLength = 'Text is long enough';
        }

        return (
            <div>
                { wordLength }
            </div>
        );
    }
}

export default ValidationComponent;