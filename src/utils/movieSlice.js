import { createSlice } from "@reduxjs/toolkit";

 
 const movieSlice = createSlice({
    name:'moveis',
    initialState:{
        nowPlayingMovies : null,
        mainMovieTrailer:null
    },
    reducers: {
        addNowPlayingMovies :  (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieTrailer:(state, action)=>{
            state.mainMovieTrailer = action.payload
        }
    }
 })
export const {addNowPlayingMovies, addMainMovieTrailer} = movieSlice.actions
 export default movieSlice.reducer