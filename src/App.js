import React, { useState } from 'react'
import './App.css'
import Todo from './Todo'
import TodoInput from './TodoInput'
import endpoints from './Endpoints'

function App() {
  const [todos, setTodos] = useState([])

  async function AddTodo(todo) {
    // push new todo to endpoint
    const response = await fetch(endpoints.todos, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    if (response.ok) {
      const newTodos = [...todos]
      newTodos.push(todo)
      setTodos(newTodos)
    } else {
      alert('failed to POST todo to backend')
    }
  }

  async function DeleteTodo(id) {
    const response = await fetch(endpoints.todos + '/' + id, {
      method: 'DELETE'
    })

    if (!response.ok) {
      getTodos()
    }
  }

  function CompleteTodo(index) {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const getTodos = async () => {
    const todoResponse = await fetch(endpoints.todos)
    const todoJSON = await todoResponse.json()
    console.log(todoJSON)
    setTodos(todoJSON)
  }

  if (todos == '') {
    getTodos()
  }

  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoInput AddTodo={AddTodo} getTodos={getTodos}></TodoInput>

      <div className="todo-container">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              index={todo.id}
              DeleteTodo={DeleteTodo}
              CompleteTodo={CompleteTodo}
            ></Todo>
          )
        })}
      </div>
    </div>
  )
}

export default App
