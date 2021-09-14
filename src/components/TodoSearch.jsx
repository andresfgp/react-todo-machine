import React, {useContext} from 'react'
import '../assets/styles/components/TodoSearch.css'
import {ReactComponent as ImportantIcon} from '../assets/static/important.svg';
import {TodoContext} from '../hooks/useContext'


const TodoSearch = (props) => {
  const {searchValue, setSearchValue,  searchImportantValues, setSearchImportantValues}=useContext(TodoContext);

  const inputChange=(e) => {
    setSearchValue(e.target.value)
  };
  const onImportant=()=>{
    setSearchImportantValues(!searchImportantValues)
  };
  return (
    <>
      <section className="TodoSearch">
        <input 
          className="TodoSearch__input"
          placeholder="Search..."
          value={searchValue}
          onChange={inputChange}
        />
        <ImportantIcon 
          className={`TodoSearch__important ${searchImportantValues && 'TodoSearch__important--active'}`} 
          onClick={onImportant}
        />
      </section>
    </>
    );
}

export {TodoSearch}
