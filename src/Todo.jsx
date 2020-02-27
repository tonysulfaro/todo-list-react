import React from 'react';

function Todo({todo, index, DeleteTodo}) {
    return (
        <div className="todo">
            <h2>{todo.task}</h2>
            <p>{todo.description}</p>
            <button
                onClick={(e)=>{
                    DeleteTodo(index)
                }}
            >Delete</button>
        </div>
    )
}

export default Todo