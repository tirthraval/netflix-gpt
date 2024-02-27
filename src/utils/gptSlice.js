import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch : false,
        tmdbMovieList : null,
        gptSuggestMovie : null,
    },
    reducers:{
        toggleGptSearch : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieSuggestionList : (state, action) =>{
            const {movieList, tmdbResult} = action.payload;
            state.tmdbMovieList = tmdbResult;
            state.gptSuggestMovie = movieList;
        }

    }
})
export const {toggleGptSearch, addGptMovieSuggestionList} = gptSlice.actions
export default gptSlice.reducer