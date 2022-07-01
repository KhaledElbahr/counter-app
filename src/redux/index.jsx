// import { createStore } from 'redux';

// const ADD_TODO_ACTION = 'ADD_TODO';
// const DELETE_TODO_ACTION = 'DELETE_TODO';


// Add Todo Action
// export const addTodoAction = (payload) => {
//     return {
//         type: ADD_TODO_ACTION,
//         payload
//     }
// }

// Delete Todo Action
// export const deleteTodoAction = (payload) => {
//     return {
//         type: DELETE_TODO_ACTION,
//         payload
//     }
// }

// Reducer
// export const todoReducer = (state = InitialState, action) => {
//     switch (action.type) {
//         // update state
//         case ADD_TODO_ACTION:
//             return {...state, todos:[...state.todos, action.payload]}
//         case DELETE_TODO_ACTION:
//             return {...state, todos:[...state.todos.filter((todo, i) => i !== action.payload)]}      
//         default:
//             return state
//     }
// }

// // Store
// export const Store = createStore(   // create store
//     // set Reducers
//     todoReducer,
// )

// console.log(Store.getState());
