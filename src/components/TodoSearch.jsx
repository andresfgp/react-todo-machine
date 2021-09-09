import React from 'react'
import '../assets/styles/components/TodoSearch.css'


const TodoSearch = (props) => {
  const {searchValue,setSearchValue}=props;

  const inputChange=(e) => {
    setSearchValue(e.target.value)
  };
  return (
      <input 
        className="TodoSearch"
        placeholder="Search..."
        value={searchValue}
        onChange={inputChange}
      />
    );
}

export {TodoSearch}
