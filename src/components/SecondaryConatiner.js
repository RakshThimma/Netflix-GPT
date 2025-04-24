import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-50 relative z-20">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title="Top Rated Movies"
          movies={movies.NowTrendingMovies}
        ></MovieList>
        <MovieList
          title="Upcoming Movies"
          movies={movies.UpcomingMovies}
        ></MovieList>
        <MovieList
          title="Popular Movies"
          movies={movies.PopularMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryConatiner;
