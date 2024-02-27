import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);

  const {tmdbMovieList, gptSuggestMovie} = gpt
  if(!gptSuggestMovie)return null;
  return (
    <div className='p-8 m-4 bg-black text-white bg-opacity-90'> 
        <div>
            {
              gptSuggestMovie.map((movieName,index) => <MovieList title={movieName} movie={tmdbMovieList[index]}/>)
            }
        </div>
    </div>
  )
}

export default GptMovieSuggestion