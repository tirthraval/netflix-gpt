import React from 'react'
import { useSelector, useStore } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movie = useSelector(store => store.movies)
    if ((movie.nowPlayingMovies === null)) return;
    return (

        <div className='bg-black'>
            <div className='-mt-40 relative z-12'>
                <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movie={movie.popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer