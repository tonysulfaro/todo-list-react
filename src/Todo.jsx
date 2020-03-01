import React from 'react';

function Todo({todo, index, DeleteTodo, CompleteTodo}) {
    return (
        <div className="todo">
            <h2>{todo.task}</h2>
            <p>{todo.description}
                <button
                    className="danger"
                    onClick={()=>{
                        DeleteTodo(index)
                    }}
                >Delete</button>

                <button
                    className="primary"
                    onClick={()=>{
                        CompleteTodo(index)
                    }}
                >Complete</button>
            </p>
            
        </div>
    )
}

export default Todo