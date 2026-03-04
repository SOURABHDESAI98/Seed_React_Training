import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "John Doe",
        token: "token123",
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.name;
            state.token = action.payload.token;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.userName = "";
            state.token = "";
            state.loggedIn = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;