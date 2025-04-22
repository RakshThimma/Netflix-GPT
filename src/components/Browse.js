import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useNowTrendingMovies from "../Hooks/useNowTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useNowTrendingMovies();
  useUpcomingMovies();

  const GptSearchToggle = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="w-full  bg-black">
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
