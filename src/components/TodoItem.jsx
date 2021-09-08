import React from 'react'

const TodoItem = (props) => {
    const {text}=props;
    return (
        <>
            <li>
                <span>C</span>
                <p>{text}</p>
                <span>X</span>       
            </li>
        </>
    )
}

export {TodoItem}
