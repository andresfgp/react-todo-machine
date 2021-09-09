import React from 'react';
import '../assets/styles/components/TodoItem.css';
import {ReactComponent as DeleteIcon} from '../assets/static/delete.svg';
import {ReactComponent as ImportantIcon} from '../assets/static/important.svg';
import {ReactComponent as CheckIcon} from '../assets/static/check.svg';
import {ReactComponent as NoneCheckIcon} from '../assets/static/noneCheck.svg';

function TodoItem(props) {

  const {text, completed, completeTodos, deleteTodos, important,importantTodos }=props;
  const onComplete=()=>{
    completeTodos();
  }
  const onDelete=()=>{
    deleteTodos();
  }
  const onImportant=()=>{
    importantTodos();
  }
  return (
    <li className={`TodoItem ${important && 'TodoItem--active'}`}>
      <span 
        className={`Icon`}
        onClick={onComplete}
      >
      {completed?<CheckIcon />:<NoneCheckIcon />}
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span>
      <ImportantIcon 
        className={`Icon Icon-important ${important && 'Icon-important--active'}`} 
        onClick={onImportant}
      />
      </span>
      <span>
      <DeleteIcon 
        className="Icon Icon-delete" 
        onClick={onDelete}
      />
      </span>
    </li>
  );
}

export { TodoItem };
