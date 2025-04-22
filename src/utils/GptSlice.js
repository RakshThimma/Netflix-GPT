import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleShowGptSearch: (state) => {
            state.showGptSearch = !(state.showGptSearch)
        }
    }
})

export const {toggleShowGptSearch}= GptSlice.actions;
export default GptSlice.reducer;