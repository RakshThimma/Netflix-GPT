import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


// fetch data from TMDB API and updates store
const useNowTrendingMovies = () => {
  const dispatch = useDispatch();
  const handleApI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowTrendingMovies(json.results));
  };
  useEffect(() => {
    handleApI();
  }, []);
  
};

export default useNowTrendingMovies;
