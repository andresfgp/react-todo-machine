import React, {useContext} from 'react'
import '../assets/styles/components/TodoSearch.css'
import {ReactComponent as ImportantIcon} from '../assets/static/important.svg';
import {TodoContext} from '../hooks/useContext'


const TodoSearch = (props) => {
  const {searchValue,
    setSearchValue,
    searchImportantValues,
    setSearchImportantValues,
    setSearchCompletedValues,
    setSearchNoCompletedValues,
    searchCompletedValues,
    searchNoCompletedValues}=useContext(TodoContext);

  const inputChange=(e) => {
    setSearchValue(e.target.value)
  };
  const onImportant=()=>{
    setSearchImportantValues(!searchImportantValues)
  };

  const onAll=()=>{
    setSearchNoCompletedValues(false)
    setSearchCompletedValues(false)
  };
  const onToDo=()=>{
    setSearchNoCompletedValues(true)
    setSearchCompletedValues(false)
  };
  const onComplete=()=>{
    setSearchNoCompletedValues(false)
    setSearchCompletedValues(true)
  };

  return (
    <>
      <section className="TodoSearch">
        <div className="TodoSearch__inputAndImp">
          <input 
            className="TodoSearch__inputAndImp-input"
            placeholder="Search..."
            value={searchValue}
            onChange={inputChange}
          />
          <ImportantIcon 
            className={`TodoSearch__inputAndImp-imp ${searchImportantValues && 'TodoSearch__inputAndImp-impActive'}`} 
            onClick={onImportant}
          />
        </div>
        <div className="TodoSearch__button">
          <button 
            onClick={onAll}
            className={`TodoSearch__button-style ${!searchCompletedValues && !searchNoCompletedValues && 'TodoSearch__button-active'}`}>All</button>
          <button 
            onClick={onToDo}
            className={`TodoSearch__button-style ${searchNoCompletedValues && 'TodoSearch__button-active'}`}>To do</button>
          <button 
            onClick={onComplete}
            className={`TodoSearch__button-style ${searchCompletedValues && 'TodoSearch__button-active'}`}>Completed</button>
        </div>
      </section>
    </>
    );
}

export {TodoSearch}
