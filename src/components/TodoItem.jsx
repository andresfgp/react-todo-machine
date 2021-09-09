import React from 'react';
import '../assets/styles/components/TodoItem.css';
import {ReactComponent as DeleteIcon} from '../assets/static/delete.svg';

function TodoItem(props) {
  const {text, completed}=props;
  const onComplete=()=>{
    alert('Ya completaste el todo '+text)
    
  }
  const onDelete=()=>{
    alert('Borraste el todo '+text)
  }
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span>
      <DeleteIcon 
        className="Icon-delete" 
        onClick={onDelete}
      />
      </span>
    </li>
  );
}

export { TodoItem };
