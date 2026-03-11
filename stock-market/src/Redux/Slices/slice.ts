
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'info',
    initialState: {
        name: 'AC',
        age: 100},
    reducers: 
    {
        changeName: (state, action)=> {
            return {...state, name: action.payload.name}
        },
        changeAge: (state, action)=> {
             return {...state, age: action.payload.age}
        }
        
    }
});

export const {changeName, changeAge} = slice.actions;

export default slice.reducer;