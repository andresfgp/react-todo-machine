import React from 'react'
import '../assets/styles/components/TodoInit.css'
import thingsToDo from '../assets/static/Things-to-Do.png'
import flecha from '../assets/static/flecha.svg'


const TodoInit = () => {

    return (
        <div className="TodoInit">
            <h1>Let's Start!</h1>
            <h2>Add a new</h2>
            <img src={thingsToDo} alt="thing to do"/>  
            <img src={flecha} alt="flecha"/>  
        </div>
    )
}

export {TodoInit}
