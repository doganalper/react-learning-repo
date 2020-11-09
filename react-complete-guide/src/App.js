import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Derste alınan notlar için notes.js dosyasına bak.
// extends component classını inherit ettiğini belirtir. bu sayede component olduğunu belirtiriz.
class App extends Component {

  state = {
    persons: [
      { id: 1 ,name: 'Alper', age: 21 },
      { id: 2 ,name: 'Kerem', age: 23 },
      { id: 3 ,name: 'Cenk', age: 17 }
    ],
    showPersons: false,
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons})
  }

  
  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App! </h1>
          <p className={ classes.join(' ') }>This is really working!</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            { this.state.showPersons ? 'Toggle Persons' : 'Show Persons'}
          </StyledButton>
          { persons }
        </div>
    );
  }
}

export default App;

// HOC yapımı oluyor Radium(App);
