import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://fakestoreapi.com/products';

// createAsuncThunk(type, callback)
export const getProducts = createAsyncThunk(
    'product/getProducts',
    () => {
        return fetch(baseUrl)
        .then((res) => res.json())
        .then((json) => json)
        .catch(err=> console.log(err))
    }
)

const initialState = {
    products: [],
    loading: false
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: () => console.log('create product!!'),
    },
    extraReducers: {
        [getProducts.pending] : 
        (state) => {
            // pending
            state.loading = true
        },
        [getProducts.fulfilled] : 
        (state, action) => {
            // fulfilled
            state.products = action.payload
            state.loading = false
        },
        [getProducts.rejected] : 
        (state, action) => {
            // rejected
            state.err = action.payload
        }
    }
})

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;