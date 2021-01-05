import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App(props) {

  const [todos, setTodos] = useState(props.state.todos)
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function handlerAddTodo(e) {
    const name = todoNameRef.current.value
    if(!name)return alert('Напишіть щось!')
    setTodos((prevTodo) =>{
      return [...prevTodo,{id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <div className='wrapper'>
      <h2>ToDo</h2>
      <div className='add'>
        <input ref={todoNameRef} type='text'/>
        <button  onClick={handlerAddTodo}>+</button>
      </div>

      {todos.length ? <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/> : <p>No Todo!</p>}
       
    </div>
  );

}

export default App;
