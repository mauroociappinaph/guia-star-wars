import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./userSlice"

const store = configureStore({
    
    reducer: {
        character: characterReducer,

    }
})

export default store;