import React, { useState } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Handle Functions
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
      <TodoForm
        newTodo={newTodo}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Home;
