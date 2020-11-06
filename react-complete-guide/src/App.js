import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Derste alınan notlar için notes.js dosyasına bak.
// extends component classını inherit ettiğini belirtir. bu sayede component olduğunu belirtiriz.
class App extends Component {

  state = {
    persons: [
      { name: 'Alper', age: 21 },
      { name: 'Kerem', age: 23 },
      { name: 'Cenk', age: 17 }
    ],
  }

  switchNameHandler = (newName) => {
    // BUNU YAPMA! this.state.persons[0].name = "Emre";
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Alper', age: 23 },
        { name: 'Ali', age: 17 }
      ],
    }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alper', age: 21 },
        { name: event.target.value, age: 23 },
        { name: 'Ali', age: 17 }
      ],
    }
    )
  }

  style = {
    backgroundColor: 'lightblue',
    font: 'inherit',
    color: 'red',
    border: '1px solid blue',
    borderRadius: '5px',
    padding: '8px',
    cursor: 'pointer'
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App! </h1>
        <button onClick={() => this.switchNameHandler('Görkem')} style={this.style}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Emre')}
          changed={this.nameChangedHandler}>
          Hobies: Nothing.
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

