import React, { useState } from 'react';

function TodoInput({AddTodo}){

    const [todo, setTodo] = useState('')
    const [description, setDescription] =  useState('')

    return (
        <form
            onSubmit = {(e) => {
                e.preventDefault()
                AddTodo({task: todo, description:description, completed:false})
                setTodo('')
                setDescription('')
            }}
        >
            <p>Todo:</p>
            <input type="text" 
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value)
            }}/>

            <p>Description:</p>
            <input type="text" 
            value={description}
            onChange={(e)=> {
                setDescription(e.target.value)
            }}/>

            <button 
            className="secondary"
            type="submit">Add Todo</button>
        </form>
    )
}

export default TodoInput