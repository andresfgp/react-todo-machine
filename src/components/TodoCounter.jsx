import React from 'react'
import '../assets/styles/components/TodoCounter.css'
import thingsToDo from '../assets/static/Things-to-Do.png'

const TodoCounter = () => {
    return (
        <div className="title">
            <img src={thingsToDo} alt="" />
            <h2>You have completed 2 of 3 tasks</h2>
        </div>
    )
}

export {TodoCounter}
