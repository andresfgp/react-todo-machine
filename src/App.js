import React, {useState} from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import './assets/styles/App.css'

function generateUUID() { // Public Domain/MIT
  let d = new Date().getTime();//Timestamp
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;//random number between 0 and 16
    if (d > 0) { //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else { //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
  });
}

// const defaultTodos=[
//   {text:'Cortar cebolla',completed:false, important:false, id:generateUUID()},
//   {text:'tomar el curso de react',completed:true, important:false, id:generateUUID()},
//   {text:'llorar',completed:false, important:false, id:generateUUID()},
// ]

function useLocalStorage(itemName, initialValue) { //nuevo HOOK
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App(props) {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); //nuevo Hook para localStorage

  const [searchValue,setSearchValue]=useState(''); //props input for Search
  let searchedTodos=[];
  !searchValue.length>0?searchedTodos=todos:searchedTodos=todos.filter(item=>item.text.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text
  
  const [importantValue,setImportantValue]=useState(false); //state search important
  let searchedImportantTodos=[];
  !importantValue?searchedImportantTodos=searchedTodos:searchedImportantTodos=searchedTodos.filter(item=>item.important); //filter Search

  const completedTodos=todos.filter(item=> !!item.completed).length; // filter completed ToDos
  const totalTodos= todos.length; //Total ToDos

  const completeTodos=(text)=>{ // New array with complete true or false
    const todoIndex=todos.findIndex(item=>item.text===text);
    const newTodos=[...todos]; //nueva lista
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    saveTodos(newTodos) //setTodos change for saveTodos
  }

  const deleteTodos=(text)=>{ // New array with delete ToDos
    const newTodos=todos.filter(item=>item.text!==text); //nueva lista
    saveTodos(newTodos) //setTodos change for saveTodos
  }
  const importantTodos=(text)=>{ // New array with important true or false
    const todoIndex=todos.findIndex(item=>item.text===text);
    const newTodos=[...todos]; //nueva lista
    newTodos[todoIndex].important=!newTodos[todoIndex].important;
    saveTodos(newTodos) //setTodos change for saveTodos
  }

  return (
    <>
      <section className="todos">
        <section className="todos__container">
          <TodoCounter 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            importantValue={importantValue}
            setImportantValue={setImportantValue}
          />
          <TodoList>
            <div className="todos__container-noImportant">
              {searchedImportantTodos.length===0?<h1>DOESN'T EXIST TASK</h1>:null}
            </div>
            {searchedImportantTodos.map(item => (
              <TodoItem 
                text={item.text}
                key={item.id}
                completed={item.completed}
                important={item.important}
                completeTodos={()=>completeTodos(item.text)}
                deleteTodos={()=>deleteTodos(item.text)}
                importantTodos={()=>importantTodos(item.text)}
              />
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
