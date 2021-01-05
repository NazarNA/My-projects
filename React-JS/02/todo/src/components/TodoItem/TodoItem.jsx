import React from 'react';
import style from './TodoItem.module.css'

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    
    const activeClass = []

    if(todo.completed){
        activeClass.push(style.done)
    }


    const handleTodoClick = ()=>{
        toggleTodo(todo.id)
    }


    return (
        <li className={style.item}>
            <span className={activeClass}>
                <label>
                    <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={handleTodoClick}
                    />
                    {todo.name} 
                </label>
            </span>

            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    );
}

export default TodoItem;
