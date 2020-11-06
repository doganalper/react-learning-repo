import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Derste alınan notlar için notes.js dosyasına bak.
// extends component classını inherit ettiğini belirtir. bu sayede component olduğunu belirtiriz.
const App = props => {

    const [persons, setPersons] = useState({
        persons: [
            { name: 'Alper', age: 21 },
            { name: 'Kerem', age: 23 },
            { name: 'Cenk', age: 17 }
        ],
    });

    const switchNameHandler = () => {
        setPersons({
            persons: [
                { name: 'Emre', age: 21 },
                { name: 'Alper', age: 23 },
                { name: 'Ali', age: 17 }
            ],
        }
        )
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App! </h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={persons.persons[0].name} age={persons.persons[0].age} />
            <Person name={persons.persons[1].name} age={persons.persons[1].age} >
                Hobies: Nothing.
      </Person>
            <Person name={persons.persons[2].name} age={persons.persons[2].age} />
        </div>
    );
}

export default App;

  // state = {
  //   persons: [
  //     { name: 'Alper', age: 21 },
  //     { name: 'Kerem', age: 23},
  //     { name: 'Cenk', age:17 }
  //   ],
  // }

  // switchNameHandler = () => {
  //   // BUNU YAPMA! this.state.persons[0].name = "Emre";
  //   this.setState({
  //       persons: [
  //         { name: 'Emre', age: 21 },
  //         { name: 'Alper', age: 23 },
  //         { name: 'Ali', age: 17 }
  //       ],
  //     }
  //   )
  // }