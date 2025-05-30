import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


// fetch data from TMDB API and updates store
const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const dispatch = useDispatch();
  const handleApI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      handleApI();
    }
  }, []);
  
};

export default useNowPlayingMovies;
