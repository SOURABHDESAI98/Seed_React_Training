import { configureStore } from "@reduxjs/toolkit";
import slice from '../Slices/slice'; 
const store = configureStore({
    reducer: 
    {
        info: slice
    }
}   );

export default store;