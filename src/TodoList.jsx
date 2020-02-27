import React from 'react';
import Todo from './Todo'

function TodoList({todos}){
    return (
    <div>
        {todos.map((todo, index) => {
            console.log(todo)
            return (
            <Todo key={index.toString()} todo={todo}></Todo>
            )
        })}
    </div>
    )   
}

export default TodoList