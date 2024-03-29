import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return;
  return (
    <div className='w-36 pr-4'>
        <img alt='paoster for movie' src = {IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard