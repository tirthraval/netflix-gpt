import { createSlice } from "@reduxjs/toolkit";

 
 const movieSlice = createSlice({
    name:'moveis',
    initialState:{
        nowPlayingMovies : null,
        mainMovieTrailer:null,
        popularMovies:null,
    },
    reducers: {
        addNowPlayingMovies :  (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :  (state,action) => {
            state.popularMovies = action.payload;
        },
        addMainMovieTrailer:(state, action)=>{
            state.mainMovieTrailer = action.payload
        }
    }
 })
export const {addNowPlayingMovies, addMainMovieTrailer, addPopularMovies} = movieSlice.actions
 export default movieSlice.reducer