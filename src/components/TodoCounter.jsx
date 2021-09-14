import React, {useContext} from 'react'
import '../assets/styles/components/TodoCounter.css'
import thingsToDo from '../assets/static/Things-to-Do.png'
import {TodoContext} from '../hooks/useContext'

const TodoCounter = (props) => {
    const {completedTodos, totalTodos}=useContext(TodoContext)
    return (
        <div className="title">
            <img src={thingsToDo} alt="" />
            {totalTodos===0?(<h2>Let's create a new task!</h2>):
            totalTodos===1?(<h2>You have completed <br/> {completedTodos} of {totalTodos} task</h2>):
            (<h2>You have completed <br/> {completedTodos} of {totalTodos} tasks</h2>)}
        </div>
    )
}

export {TodoCounter}
