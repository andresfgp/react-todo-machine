import React from 'react'
import '../assets/styles/components/TodoList.css'

const TodoList = (props) => {
    return (
        <section className="TodoList">
          <ul>
            {props.children}
          </ul>
        </section>
      );
}

export {TodoList}
