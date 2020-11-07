import React from 'react';
import './TodosSect.css'
import TodoRow from './TodoRow';

const WaitingTodos = props => {

    let makeTodoDone = (id) => {
        props.makeTodoDoneFunc(id)
    }

    return (
        <div className="todoColumn">
            {
                props.todos.map(todo => <TodoRow todo={ todo } key={ todo.id } isWaiting={ true } makeTodoDone={makeTodoDone.bind(this, todo.id)}/>)
            }
        </div>
    );
};

export default WaitingTodos;