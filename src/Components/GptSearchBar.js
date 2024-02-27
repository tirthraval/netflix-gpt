import React, { useRef } from 'react'
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieSuggestionList } from '../utils/gptSlice';

const GptSearchBar = () => {
  const selectLang = useSelector(store => store?.config?.lang);
  const searchText = useRef(null)
  const dispatch = useDispatch();
  const getTMDBMovie = async (movie) =>{
    const data = await fetch ("https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json();
    return json.results;

  }
 
  const fetchGptResults = async () => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const movieList = chatCompletion.choices[0].message.content.split(",");
    const promiseArray = movieList.map((movie) => getTMDBMovie(movie));
    const tmdbMovie = await Promise.all(promiseArray);
    dispatch(addGptMovieSuggestionList({movieList : movieList , tmdbResult : tmdbMovie}))

  }
  return (
    <div className='pt-[15%] flex justify-center'>
      <form className='bg-black grid grid-cols-12 w-1/2 ' onSubmit={(e) => e.preventDefault()}>
        <input ref = {searchText} className='border p-4 m-3 col-span-9 border-black' placeholder={lang[selectLang].gptSearchPlaceholder}></input>
        <button className='bg-red-700 p-4 m-3 col-span-3 rounded-lg' onClick={fetchGptResults}>{lang[selectLang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar