import React, { useState } from 'react';

function TodoInput(){

    const [todo, setTodo] = useState('')
    const [description, setDescription] =  useState('')

    return (
        <form
            onSubmit = {(e) => {
                e.preventDefault()
                console.log(todo, description)
            }}
        >
            <p>Todo:</p>
            <input type="text" onChange={(e) => {
                setTodo(e.target.value)
            }}/>

            <p>Description:</p>
            <input type="text" 
            onChange={(e)=> {
                setDescription(e.target.value)
            }}/>

            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoInput