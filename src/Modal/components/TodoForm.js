import React,{useContext,useState} from 'react'
import {TodoContext} from '../../hooks/useContext'
import '../assets/styles/components/TodoForm.css'
import thingsToDo from '../assets/static/Things-to-Do.png'
import {ReactComponent as ImportantIcon} from '../assets/static/important.svg';


const TodoForm = () => {

    const {addTodos,setOpenModal,importantNewValue, setImportantNewValue}=useContext(TodoContext);
    const [newTodoValue,setNewTodoValue]=useState('')

    const onChange=(e)=>{
        setNewTodoValue(e.target.value)
    }

    const onCancel=()=>{
        setOpenModal(false)
    }

    const onSubmit=(e)=>{
        e.preventDefault(); //cuando formulario se envie (cuando le demos click al botton que tiene type submit) NO vamos a recargar la pagina o enviar los datos a otra parte
        addTodos(newTodoValue);
        setOpenModal(false)
    }

    const onImportant=()=>{
        setImportantNewValue(!importantNewValue)
    };

    return (
        <form onSubmit={onCancel}>
            <div className='TodoForm__label'>
                <label>Write down a new </label>
                <img src={thingsToDo} alt="thing to do"/>  
            </div>
            <div className='TodoForm__text'>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder='Write a new task'
                    name=""
                    id=""
                    cols="30"
                    rows="10" />
                <ImportantIcon 
                className={`TodoForm__text-important ${importantNewValue && 'TodoForm__text-importantActive'}`} 
                onClick={onImportant}
                />
            </div>
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancel</button>
                <button 
                    onClick={onSubmit}
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    )
}

export {TodoForm}
