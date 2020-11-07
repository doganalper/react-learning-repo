import React from 'react';
import './TodosSect.css';
import WaitingTodos from './WaitingTodos';
import FinishedTodos from './FinishedTodos';

const TodosSect = props => {

    let waitingTodos = props.todos.filter(todo => todo.state === 'Waiting');
    let finishedTodos = props.todos.filter(todo => todo.state === 'Done');

    let makeTodoDoneFunc = (todoIndex) => {
        props.makeTodoDone(todoIndex);
    }

    return (
        <div className="TodosSect">
            <WaitingTodos todos={waitingTodos} makeTodoDoneFunc={makeTodoDoneFunc} />
            <FinishedTodos todos={finishedTodos} />
        </div>
    );
};

export default TodosSect;