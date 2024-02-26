import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
      getNowPlayingMovies();
    },[])
  
    const getNowPlayingMovies = async ()=>{
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const data = await res.json();
      dispatch(addNowPlayingMovies(data?.results));
    }

}

export default useNowPlayingMovies