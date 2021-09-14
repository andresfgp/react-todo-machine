import React,{useContext} from 'react'
import '../assets/styles/components/CreateTodoButton.css'
import {TodoContext} from '../hooks/useContext'

const CreateTodoButton = (props) => {
  const {setOpenModal,setImportantNewValue}=useContext(TodoContext)
    const handleOnClick =()=>{
      setOpenModal(true);
      setImportantNewValue(false);
    }
    return (
        <>
          <button 
            className='button'
            onClick={handleOnClick} //funcion
          >+</button>  
        </>
    )
}

export {CreateTodoButton}
