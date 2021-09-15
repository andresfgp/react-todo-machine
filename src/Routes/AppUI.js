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
import {TodoInit} from '../Modal/components/TodoInit'
import {Footer} from '../components/Footer'

const AppUI = () => {

    const {error,
        loading,
        searchedImportantTodos,
        completeTodos,
        deleteTodos,
        importantTodos,
        openModal,
        init}=useContext(TodoContext)

    return (
            <>
            <section className="todos">
                <section className="todos__container">
                    <TodoCounter />
                    <TodoSearch />
                    <TodoList>
                        <div className="todos__container-noImportant">
                        {error && <p>Something is wrong...</p>}
                        {loading && <p>Loading...</p>}
                        {!loading && searchedImportantTodos.length===0?<h1>TASK DOESN'T EXIST</h1>:null}
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
                    <span className={`todos__container-button ${init && 'todos__container-buttonActive'}`}>
                    <CreateTodoButton />
                    </span>
                    {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                    )}
                    {!!init && (
                    <Modal>
                        <TodoInit />
                    </Modal>
                    )}

                </section>
            </section>
            <Footer />
            </>
    )
}

export default AppUI;

