import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
function App() {

  const [todos, setTodos] = useState([
    'Got to gym',
    'Pick up the kid from school',
    'Wake up early in the morning'
  ])
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodos(newTodos) {
    if (!newTodos.trim()) {
      toast.error('Please enter a Todo!', { position: "top-center", autoClose: 2000 });
      return;
    }
    const newTodoList = [...todos, newTodos];
    persist(newTodoList);
    setTodos(newTodoList)
    toast.success('Todo added successfully!', { position: "top-center", autoClose: 2000 });
  }

  function handleDeleteTodos(index, showToast=true) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    persist(newTodoList);
    setTodos(newTodoList);
    if (showToast) {
      toast.success('Todo deleted successfully!', { position: "top-center", autoClose: 2000 });
    }
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index, false);
  }
  function persist(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  useEffect(()=>{
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (
    <>
      <h1 className="todo-heading">React Todo APP</h1>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
      <ToastContainer />
    </>
  )
}

export default App
