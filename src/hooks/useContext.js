import React, {useState} from 'react';
import useLocalStorage from './useLocalStorage'

const TodoContext= React.createContext();

function TodoProvider(props){

    const { children } = props;

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); //nuevo Hook para localStorage
    
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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            searchValue,
            searchedTodos,
            importantValue,
            searchedImportantTodos,
            completedTodos,
            setSearchValue,
            setImportantValue,
            completeTodos,
            deleteTodos,
            importantTodos,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}