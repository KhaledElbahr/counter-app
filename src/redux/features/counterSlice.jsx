import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   counter: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state, actions) => { state.counter += actions.payload },
        decrementCount: (state, actions) => { state.counter -= actions.payload }
    }
})

export const { incrementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;
