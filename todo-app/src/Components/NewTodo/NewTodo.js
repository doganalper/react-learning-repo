import React from 'react';
import './NewTodo.css';

const NewTodo = props => {

    let newTodo = React.createRef();

    let addTodo = () => {
        props.addTodo(newTodo.current.value)
    }

    return (
        <div className="NewTodo">
            <input type="text" placeholder="Your new Todo..." ref={ newTodo }/>
            <button onClick={addTodo}> Add Todo! </button>
        </div>
    );
};

export default NewTodo;