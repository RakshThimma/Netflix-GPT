import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-90 pl-10 absolute bg-gradient-to-r text-white from-black">
        <h1 className='absolute text-white top-40 md:top-20 md:mt-58 md:font-bold md:text-3xl md:py-2 md:text-white font-bold text-xl'>{title}</h1>
        <p className='hidden md:py-2 md:w-1/2 md:block'>{overview}</p>
        <div>
            <button className="absolute p-1 top-50 bg-gray-500 text-xs md:top-118 cursor-pointer md:p-2 md:w-32 md:m-1 md:text-lg md:font-bold md:bg-white text-black border-black border-2 border-solid hover:bg-black hover:text-white hover:border-white rounded-sm">▷ Play</button>
            <button className="absolute p-1 top-50 bg-gray-500 left-23 text-xs md:top-118 md:left-45 cursor-pointer md:p-2 md:w-32 md:m-1 md:text-lg md:font-bold md:bg-white text-black border-black border-2 border-solid hover:bg-black hover:text-white hover:border-white rounded-sm">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle