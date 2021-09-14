import React from 'react'
import '../assets/styles/components/TodoList.css'

const TodoList = (props) => {
    const {children}=props;
    return (
        <section className="TodoList">
          <ul>
            {children}
          </ul>
        </section>
      );
}

export {TodoList}
