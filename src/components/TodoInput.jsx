import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input 
        type="text" 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        placeholder="Enter todo..." 
      />
      <button 
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}
