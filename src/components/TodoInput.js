import React from 'react';
import '../css/TodoInput.css';

const TodoInput = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Add task.."
                value={props.text_input}
                onChange={props.handle_Change}
            />
        </div>
    )
}

export default TodoInput;
