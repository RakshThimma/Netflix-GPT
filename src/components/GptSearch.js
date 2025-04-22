import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='bg-white'>
        <div className='-z-20'>
        <img
          src={BG_IMAGE_URL}
          alt=""
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch