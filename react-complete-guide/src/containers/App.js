import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

// Derste alınan notlar için notes.js dosyasına bak.
// extends component classını inherit ettiğini belirtir. bu sayede component olduğunu belirtiriz.
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 1 ,name: 'Alper', age: 21 },
        { id: 2 ,name: 'Kerem', age: 23 },
        { id: 3 ,name: 'Cenk', age: 17 }
      ],
      showPersons: false,
      showCockpit: true,
      changedCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changedCounter++
      }
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

  loginHandler = () => {
    this.setState((prevState, props) => {
      return { authenticated: !prevState.authenticated }
    })
  }

  
  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuth={this.state.authenticated}
          />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler }}>
          {
            this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
            ) : null
          }
            {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

// HOC yapımı oluyor Radium(App);
