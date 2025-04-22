import React from 'react'
import language from '../utils/langConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langToUse = useSelector((store) => store.config.lang)
  return (
    <div className="absolute top-[27%] w-full left-1/4">
        <form className='bg-black text-white w-5/12 p-2 grid grid-cols-12'>
            <input type="text" placeholder={language[langToUse].placeholder} className='px-4 py-2 m-1 col-span-9 bg-white text-gray-500' />
            <button className='bg-red-500 m-1 col-span-3'>{language[langToUse].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar