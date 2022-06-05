import { createSlice } from "@reduxjs/toolkit";


const defaultStateValue = {name: "", age: 0, email: ""}
const userSlice = createSlice({
    name: "user",
    initialState: {value: defaultStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout:(state, action) => {
            state.value = defaultStateValue
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer