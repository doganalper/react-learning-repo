import React, { Component } from 'react';

class CharComponent extends Component {
    render() {
        return (
            <div className="Char" onClick={this.props.removeChar}>
                {this.props.character}
            </div>
        );
    }
}

export default CharComponent;