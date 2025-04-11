import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
  const NowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryConatiner/>
    </div>
  );
};

export default Browse;
