import React from 'react'
import '../assets/styles/components/CreateTodoButton.css'

const CreateTodoButton = (props) => {
    const handleOnClick =(msg)=>{
      alert(msg);
    }
    return (
        <>
          <button 
            className='button'
            onClick={()=>handleOnClick('Alerta')} //funcion
          >+</button>  
        </>
    )
}

export {CreateTodoButton}
