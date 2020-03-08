import React, { useState } from 'react';

function TodoInput({AddTodo, getTodos}){

    const [todo, setTodo] = useState('')

    return (
        <div className="todo-actions">
            <form
            onSubmit = {(e) => {
                e.preventDefault()
                AddTodo({task: todo, completed:false})
                setTodo('')
            }}
        >
            <p>Todo:</p>
            <input type="text" 
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value)
            }}/>

            <button 
                className="secondary"
                type="submit">Add Todo
            </button>
        </form>

        {/* <button 
            className="secondary"
            type="submit"
            onClick = {() => {
                getTodos()
            }}
            >Get Todos
        </button> */}
        </div>
    )
}

export default TodoInput