import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movie }) => {
    console.log(movie)
    if(movie === null)return;
    // console.log(title)
    return (
        <div className='px-6'>
            <h1 className='text-xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-none scrollbar-hide'>
                <div className='flex cursor-pointer'>
                    {
                        movie.map((m) => <MovieCard key={m.id} posterPath={m.poster_path} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieList