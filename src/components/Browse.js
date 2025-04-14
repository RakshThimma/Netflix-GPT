import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useNowTrendingMovies from "../Hooks/useNowTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useNowTrendingMovies();
   useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryConatiner/>
    </div>
  );
};

export default Browse;
