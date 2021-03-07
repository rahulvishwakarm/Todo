import React from 'react'

const TodoButton = (props) => {
    return (
            <input
                type="button"
                value={props.label}
            />
    )
}

export default TodoButton;
