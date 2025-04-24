import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleShowGptSearch: (state) => {
            state.showGptSearch = !(state.showGptSearch)
        },
        addGPTMovies: (state,action) => {
            const {movieNames , movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        removeMovies:(state,action) => {
            state.movieNames = null
            state.movieResults = null
        }
    }
})

export const {toggleShowGptSearch,addGPTMovies,removeMovies}= GptSlice.actions;
export default GptSlice.reducer;