import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent{

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

     render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}
export default Persons;