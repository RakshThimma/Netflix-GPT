import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useGetMovieVideo = (movie_id) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    if (json.results && Array.isArray(json.results) && json.results.length > 0) {
      const trailerVideos = json.results.filter(
        (video) => video.type === "Trailer"
      );
    
      const trailer = trailerVideos.length > 0
        ? trailerVideos[0]
        : json.results[0];
    
      dispatch(addTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useGetMovieVideo;
