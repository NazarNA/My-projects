import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types.js";

const LOCAL_STORAGE_KEY = 'todoApp.todos'
const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))


export function rootReducer(state = initialState,action){
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [...state,{id: Date.now(), name: action.payload, completed: false}]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
        default:
            return state;            
    }
}
