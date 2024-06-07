import menuSlice from "./menuSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer :{
        'menuState' : menuSlice
    }
})

export default store;