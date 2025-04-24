import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useNowTrendingMovies from "../Hooks/useNowTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { removeMovies } from "../utils/GptSlice";
import { useEffect } from "react";



const Browse = () => {
  const dispatch = useDispatch()
  useNowPlayingMovies();
  usePopularMovies();
  useNowTrendingMovies();
  useUpcomingMovies();

  const GptSearchToggle = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    if (!GptSearchToggle) {
      dispatch(removeMovies());
    }
  }, [GptSearchToggle, dispatch]);

  return (
    <div className="w-full">
      <Header />
      <div className="overflow-y-auto hide-scrollbar">
        {GptSearchToggle ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryConatiner />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
