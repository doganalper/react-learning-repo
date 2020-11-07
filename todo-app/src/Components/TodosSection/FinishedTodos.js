import React from 'react';
import TodoRow from './TodoRow';

const FinishedTodos = props => {
    return (
        <div className="todoColumn">
            {
                props.todos.map(todo => <TodoRow todo={todo} key={todo.id} isWaiting={false} />)
            }
        </div>
    );
};

export default FinishedTodos;