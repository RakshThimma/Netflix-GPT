import React, { useEffect } from "react";
import useGetMovieVideo from "../Hooks/useGetMovieVideo";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movie_id }) => {
  useGetMovieVideo(movie_id); //fetches the movie with the given movie_id and stores the trailer of movie in redux store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo); //fetching details of trailer from store

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
