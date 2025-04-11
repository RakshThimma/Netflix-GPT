import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies === null) return; //befr movies get updated 
    const mainMovie = movies[0]
    // console.log(mainMovie)
    const {original_title, overview, id} = mainMovie;

  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movie_id={id}/>
    </div>
  )
}

export default MainContainer