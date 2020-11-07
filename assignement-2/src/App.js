import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent';
import Char from './CharComponent';

class App extends Component {

  state = {
    inputLength: 0,
    inputArr: []
  }

  inputHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputArr: event.target.value.split('')
    })
  }

  removeChar = (index) => {
    let newInputArr = [...this.state.inputArr];
    newInputArr.splice(index, 1);
    this.setState({
      inputArr: newInputArr,
      inputLength: newInputArr.length
    })
  }

  render() {

    
    return (
      <div className="App">
        <input type="text" onChange={ this.inputHandler }/>
        <div>
          { this.state.inputLength }
        </div>
        <Validation length={this.state.inputLength} />
        {
          this.state.inputArr.map((char,index) => {
            return <Char character={char} key={index} removeChar={this.removeChar.bind(this, index)}/>
          })
        }
      </div>
    );
  }
}

export default App;
