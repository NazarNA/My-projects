import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types.js';

export const addTodoAction = title => ({type: ADD_TODO, payload: title});
export const removeTodoAction = id => ({type: REMOVE_TODO, payload: id});
export const toggleTodoAction = id => ({type: TOGGLE_TODO, payload: id});