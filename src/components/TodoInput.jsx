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
          if (!todoValue.trim()) {
            toast.error('Please enter a Todo!', { position: "top-center", autoClose: 2000 });
            return;
          }
          handleAddTodos(todoValue);
          setTodoValue('');
          toast.success('Todo added successfully!', { position: "top-center", autoClose: 2000 });
        }}
      >
        Add
      </button>
      
      {/* Toast Container (Required for notifications to work) */}
      <ToastContainer />
    </header>
  );
}
