import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <>
            <ul className={style.list}>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                })}
                      
            </ul> 
        </>

    );
}

export default TodoList;
