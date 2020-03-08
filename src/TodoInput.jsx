import React, { useState } from 'react';

function TodoInput({AddTodo}){

    const [todo, setTodo] = useState('')

    return (
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
            type="submit">Add Todo</button>
        </form>
    )
}

export default TodoInput