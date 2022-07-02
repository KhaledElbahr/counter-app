import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, actions) => { state.theme = actions.payload}
    }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;