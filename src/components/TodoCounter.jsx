import React from 'react'
import '../assets/styles/components/TodoCounter.css'
import thingsToDo from '../assets/static/Things-to-Do.png'

const TodoCounter = (props) => {
    const {completedTodos, totalTodos}=props
    return (
        <div className="title">
            <img src={thingsToDo} alt="" />
            {totalTodos===1?(<h2>You have completed {completedTodos} of {totalTodos} task</h2>):
            (<h2>You have completed {completedTodos} of {totalTodos} tasks</h2>)}
            
        </div>
    )
}

export {TodoCounter}
