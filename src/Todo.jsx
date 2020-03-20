import React from 'react'

function Todo({ todo, index, DeleteTodo, CompleteTodo }) {
  return (
    <div className="todo">
      <h2 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}

        <button
          className="danger"
          onClick={() => {
            DeleteTodo(index)
          }}
        >
          Delete
        </button>

        <button
          className="primary"
          onClick={() => {
            CompleteTodo(index)
          }}
        >
          Complete
        </button>
      </h2>
    </div>
  )
}

export default Todo
