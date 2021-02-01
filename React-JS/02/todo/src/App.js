import React, { useRef, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import { connect } from 'react-redux';
import { addTodoAction, removeTodoAction, toggleTodoAction } from './Redux/actions';

import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App({ todos, addTodoHandler, removeTodoHandler, toggleTodoHandler }) {

  const todoNameRef = useRef()

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = id => toggleTodoHandler(id);

  const removeTodo = id => removeTodoHandler(id);
  
  const addTodo = () => {
    const name = todoNameRef.current.value
    if(!name)return alert('Напишіть щось!')

    addTodoHandler(name)
    todoNameRef.current.value = null
  }
  
  return (
    <div className='wrapper'>
      <h2>ToDo</h2>
      <div className='listWrapper'>
        <div className='add'>
          <input ref={todoNameRef} type='text'/>
          <button onClick={addTodo}>+</button>
        </div>

          {todos.length ? <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/> : <p>No Todo!</p>}
       
      </div>
    </div>
  );
}

export default connect(
  state => ({ todos: state }),
  dispatch => ({
    addTodoHandler: title => dispatch(addTodoAction(title)),
    removeTodoHandler: id => dispatch(removeTodoAction(id)),
    toggleTodoHandler: id => dispatch(toggleTodoAction(id))
  })
)(App);
