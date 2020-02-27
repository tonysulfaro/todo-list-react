import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';

let todos = [{task:"get groceries", description: "go to kroger to get a gallon of milk"}]

function App() {
  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoInput></TodoInput>
      <Todo todo={todos[0]}></Todo>
    </div>
  );
}

export default App;
