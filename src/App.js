import React from 'react'
import './App.css';
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'

const todos=[
  {text:'Cortar cebolla',completed:false},
  {text:'tomar el curso de react',completed:false},
  {text:'llorar',completed:false},
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <input type="text" placeholder="Cebolla" />
      <TodoList>
        {todos.map(item => (
          <TodoItem text={item.text} key={item.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
    
  );
}

export default App;
