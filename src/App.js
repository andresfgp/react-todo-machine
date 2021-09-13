import React from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import './assets/styles/App.css'
import {TodoProvider,TodoContext} from '../src/hooks/useContext'

// function generateUUID() { // Public Domain/MIT
//   let d = new Date().getTime();//Timestamp
//   let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//     let r = Math.random() * 16;//random number between 0 and 16
//     if (d > 0) { //Use timestamp until depleted
//       r = (d + r) % 16 | 0;
//       d = Math.floor(d / 16);
//     } else { //Use microseconds since page-load if supported
//       r = (d2 + r) % 16 | 0;
//       d2 = Math.floor(d2 / 16);
//     }
//     return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
//   });
// }

function App(props) {

  return (

    <TodoProvider>
      <>
        <section className="todos">
          <section className="todos__container">
            <TodoCounter 
              // completedTodos={completedTodos}
              // totalTodos={totalTodos}
            />
            <TodoSearch
              // searchValue={searchValue}
              // setSearchValue={setSearchValue}
              // importantValue={importantValue}
              // setImportantValue={setImportantValue}
            />
            <TodoContext.Consumer>
              {({error,loading,searchedImportantTodos,completeTodos,deleteTodos,importantTodos})=>(
                <TodoList>
                <div className="todos__container-noImportant">
                  {error && <p>Desespérate, hubo un error...</p>}
                  {loading && <p>Estamos cargando, no desesperes...</p>}
                  {!loading && searchedImportantTodos.length===0?<h1>DOESN'T EXIST TASK</h1>:null}
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
              )}


            </TodoContext.Consumer>

            <span className="todos__container-button">
              <CreateTodoButton />
            </span>
          </section>
        </section>
      </>
    </TodoProvider>
    
  );
}

export default App;
