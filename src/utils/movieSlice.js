import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        PopularMovies:null,
        NowTrendingMovies:null,
        UpcomingMovies:null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action) => {
            state.PopularMovies = action.payload
        },
        addNowTrendingMovies:(state,action) => {
            state.NowTrendingMovies = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.UpcomingMovies = action.payload
        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addNowTrendingMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;