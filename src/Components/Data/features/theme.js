import { createSlice } from '@reduxjs/toolkit'

const defaultTheme = {theme: "white"}
const themeSlice = createSlice({
    name: 'theme',
    initialState: {value : defaultTheme},
    reducers: {
        theme: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { theme } = themeSlice.actions
export default themeSlice.reducer