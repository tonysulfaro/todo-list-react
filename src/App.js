import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';

function App() {

  const [todos, setTodos] = useState([{task:"get groceries", description: "go to kroger to get a gallon of milk"}])
  
  function AddTodo(todo){
    const newTodos = [...todos]
    newTodos.push(todo)
    setTodos(newTodos)
  }

  function DeleteTodo(id){
    const newTodos = [...todos]
    newTodos.splice(id, 1)
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoInput AddTodo={AddTodo}></TodoInput>

      {todos.map((todo, index) => {
        return (
          <Todo key={index.toString()} todo={todo} index={index} DeleteTodo={DeleteTodo}></Todo>
        )
      })}
    </div>
  );
}

export default App;
