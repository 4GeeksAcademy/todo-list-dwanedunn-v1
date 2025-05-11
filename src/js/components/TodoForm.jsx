import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              console.log('Enter key pressed');
              if (text.trim() !== '') {
                addTodo(text);
                setText('');
              }
            }
          }}
          placeholder="Add New Todo..."
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
