import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"
function App() {

  const [todos, setTodos] = useState([
    'Got to gym',
    'Pick up the kid from school',
    'Wake up early in the morning'
  ])
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos];
    persist(newTodoList);
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    persist(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
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
    </>
  )
}

export default App
