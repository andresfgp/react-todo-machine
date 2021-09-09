import React, {useState} from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import './assets/styles/App.css'

const defaultTodos=[
  {text:'Cortar cebolla',completed:true},
  {text:'tomar el curso de react',completed:true},
  {text:'llorar',completed:false},
]

function App(props) {
  const [todos,setTodos]=useState(defaultTodos);
  const [searchValue,setSearchValue]=useState('');
  return (
    <>
      <section className="todos">
        <section className="todos__container">
          <TodoCounter />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {defaultTodos.map(item => (
              <TodoItem text={item.text} key={item.text} completed={item.completed}/>
            ))}
          </TodoList>
          <span className="todos__container-button">
            <CreateTodoButton />
          </span>
        </section>
      </section>
    </>
    
  );
}

export default App;
