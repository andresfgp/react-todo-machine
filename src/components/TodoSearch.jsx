import React from 'react'
import '../assets/styles/components/TodoSearch.css'
import {ReactComponent as ImportantIcon} from '../assets/static/important.svg';


const TodoSearch = (props) => {
  const {searchValue, setSearchValue,  importantValue, setImportantValue}=props;

  const inputChange=(e) => {
    setSearchValue(e.target.value)
  };
  const onImportant=()=>{
    setImportantValue(!importantValue)
  }
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
          className={`TodoSearch__important ${importantValue && 'TodoSearch__important--active'}`} 
          onClick={onImportant}
        />
      </section>
    </>
    );
}

export {TodoSearch}
