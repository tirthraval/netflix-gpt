import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGORUND_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
      <div className='fixed -z-10'>
        <img alt='background pic' src={BACKGORUND_URL} />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch