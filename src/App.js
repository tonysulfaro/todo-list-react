import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';

let todos = [{task:"get groceries", description: "go to kroger to get a gallon of milk"},
{task:"get groceries", description: "go to kroger to get a gallon of milk"}]

function App() {
  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoInput></TodoInput>

      {/* dump out todos save in list */}
      {todos.map((todo, index) => {
        console.log(todo)
        return (
          <Todo key={index.toString()} todo={todo}></Todo>
        )
      })}
    </div>
  );
}

export default App;
