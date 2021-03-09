import React from 'react';
import '../css/todobutton.css';

const TodoButton = (props) => {
    return (
            <input
                type="button"
                value={props.label}
                onClick={props.handleClick}
            />
    )
}

export default TodoButton;
