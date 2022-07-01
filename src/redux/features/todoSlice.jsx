import { createSlice } from '@reduxjs/toolkit';

// InitialState
const initialState = {
    todos: [
        {
            title: 'React',
            content: 'props - useState - useEffect - Routes'
        },
        {
            title: 'Redux (State Management)',
            content: 'reducer - action - store - useSelector - dispatch'
        }
    ]
}

export const todoSlice = createSlice({
    // name,
    // initialState,
    // reducers: { reducers & create actions by default with the same name of reducers }
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo,i) => i !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;