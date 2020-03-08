import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';

function App() {

  const [todos, setTodos] = useState([{title:"get groceries", completed:false},
  {title:"clean driveway", completed:false}])
  
  function AddTodo(todo){
    const newTodos = [...todos]
    newTodos.push(todo)
    setTodos(newTodos)
  }

  function DeleteTodo(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  function CompleteTodo(index){
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoInput AddTodo={AddTodo}></TodoInput>

      <div className="todo-container">
        {todos.map((todo, index) => {
          return (
            <Todo 
              key={index.toString()} 
              todo={todo} 
              index={index} 
              DeleteTodo={DeleteTodo}
              CompleteTodo={CompleteTodo}
              >
            </Todo>
          )
        })}
      </div>
    </div>
  );
}

export default App;
