import React, {useContext} from 'react'
import {TodoCounter} from '../components/TodoCounter'
import {TodoItem} from '../components/TodoItem'
import {CreateTodoButton} from '../components/CreateTodoButton'
import {TodoList} from '../components/TodoList'
import {TodoSearch} from '../components/TodoSearch'
import '../assets/styles/App.css'
import {TodoContext} from '../hooks/useContext'
import {Modal} from '../Modal/index'
import {TodoForm} from '../Modal/components/TodoForm'

const AppUI = () => {

    const {error,
        loading,
        searchedImportantTodos,
        completeTodos,
        deleteTodos,
        importantTodos,
        openModal}=useContext(TodoContext)

    return (
            <>
            <section className="todos">
            <section className="todos__container">
                <TodoCounter />
                <TodoSearch />
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
                <span className="todos__container-button">
                <CreateTodoButton />
                </span>
                {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
                )}

            </section>
            </section>
            </>
    )
}

export default AppUI;

