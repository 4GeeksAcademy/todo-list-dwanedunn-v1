import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <div className="footer">
        <p className="todo-count">
          {todos.length} {todos.length === 1 ? 'item' : 'items'} left
        </p>
      </div>
    </>
  );
};

export default TodoList;
