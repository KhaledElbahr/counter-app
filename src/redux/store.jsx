import { configureStore  } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice';
import productSlice from './features/productsSlice';
import counterSlice from './features/counterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedTodoReducer = persistReducer(persistConfig, todoSlice)
const persistedProductsReducer = persistReducer(persistConfig, productSlice)
const persistedCounterReducer = persistReducer(persistConfig, counterSlice)

// Store
export const Store = configureStore({  // create store
    // set Reducers
    reducer: {
        persistedTodoReducer,
        persistedProductsReducer,
        persistedCounterReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(Store)

console.log('Store', Store.getState());