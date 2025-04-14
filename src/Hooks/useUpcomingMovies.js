import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


// fetch data from TMDB API and updates store
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const handleApI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    handleApI();
  }, []);
  
};

export default useUpcomingMovies;
