// Manage List of Todos
import { useState } from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoList = () => {
const [todos setTodos] = useState([]);
const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text, completed: false}])
}

const toggleComplete = (id) => {
    setTodos(todos.map(todo)=>todo.id === id ? {...todo, completed: !todo.completed})
}


return (
    <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        <ul>
            {todos.map(todo) => (
                <todoItem 
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                />
            )}
        </ul>
    </div>
);
}
export default TodoList;