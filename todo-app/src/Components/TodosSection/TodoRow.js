import React from 'react';

const TodoRow = props => {

    let makeDoneButton;
    if (props.isWaiting) {
        makeDoneButton = (
            <span onClick={props.makeTodoDone} className="doneBtn">
                X
            </span>
        )
    }

    return (
        <div className="todoRow">
            <span>{props.todo.detail}</span>
            { makeDoneButton }
        </div>
    );
};

export default TodoRow;