import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GptReducer from "./GptSlice";
import ConfigReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies : moviesReducer,
        gpt : GptReducer,
        config: ConfigReducer
    },
})

export default appStore