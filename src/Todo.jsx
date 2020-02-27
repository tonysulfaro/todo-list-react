import React from 'react';

function Todo(todo) {
    return (
        <div className="todo">
            <h2>{todo.todo.task}</h2>
            <p>{todo.todo.description}</p>
        </div>
    )
}

export default Todo