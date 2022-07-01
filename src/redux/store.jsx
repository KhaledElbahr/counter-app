import { configureStore  } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice';
import productSlice from './features/productsSlice';
import counterSlice from './features/counterSlice';

// Store
export const Store = configureStore({  // create store
    // set Reducers
    reducer: {
        todoSlice,
        productSlice,
        counterSlice
    }
})

console.log('Store', Store.getState());