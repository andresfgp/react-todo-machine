import React from 'react'
import '../assets/styles/components/TodoList.css'

const TodoList = (props) => {
    const {children}=props;
    return (
        <div className="TodoList">
          <ul className="TodoList__ul">
            {children}
          </ul>
        </div>
      );
}

export {TodoList}
