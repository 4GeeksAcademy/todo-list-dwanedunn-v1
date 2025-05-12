import React from 'react';

const TodoForm = ({
  newTodo,
  handleInputChange,
  handleKeyPress,
  handleAddTodo,
}) => {
  return (
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
      </div>
    </section>
  );
};

export default TodoForm;
