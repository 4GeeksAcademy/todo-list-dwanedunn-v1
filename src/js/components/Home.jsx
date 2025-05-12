import React from 'react';

import { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';

import Header from './Header';

// HANDLER FUNCTIONS
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />

      {/* TODO FORM - START */}
      <section className="todo-entry">
        <div className="todo-form">
          <input
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="What needs to be done?"
          />
          {/* <button onClick={handleAddTodo}>Add</button> */}
          <FaPlus onClick={handleAddTodo} />
        </div>
      </section>
      {/* TODO FORM - END */}
      {/* TODO LIST - START */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span>{todo.text}</span>
            <FaRegTrashCan
              className="todo-trash"
              onClick={() => handleDeleteTodo(index)}
            />
          </li>
        ))}
      </ul>
      {/* TODO LIST - END */}
    </div>
  );
};

export default Home;
