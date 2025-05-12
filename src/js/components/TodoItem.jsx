import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';

const TodoItem = ({ todo, index, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleComplete(index)}
      />
      <span className="todo-text">{todo.text}</span>
      <FaRegTrashCan
        className="todo-trash"
        onClick={() => handleDeleteTodo(index)}
      />
    </li>
  );
};

export default TodoItem;
