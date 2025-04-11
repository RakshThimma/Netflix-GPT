import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-90 pl-10 absolute bg-gradient-to-r text-white from-black">
        <h1 className='font-bold text-3xl py-2'>{title}</h1>
        <p className='py-2 w-1/2'>{overview}</p>
        <div>
            <button className="cursor-pointer p-2 w-32 m-1 font-bold bg-white text-black border-black border-2 border-solid hover:bg-black hover:text-white hover:border-white rounded-sm">▷ Play</button>
            <button className="cursor-pointer p-2 w-32 m-1 font-bold bg-white text-black border-black border-2 border-solid hover:bg-black hover:text-white hover:border-white rounded-sm">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle