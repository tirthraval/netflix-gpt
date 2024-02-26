import { useEffect } from "react"
import { addMainMovieTrailer } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constant"

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getMovieTrailer(movie_id)
    }, [])

    const getMovieTrailer = async (movie_id) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter((video) => video?.type === "Trailer");
        const Trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMainMovieTrailer(Trailer));

    }
}

export default useMovieTrailer;