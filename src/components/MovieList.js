import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="">
      <p className="text-white text-2xl font-bold px-12 py-2">{title}</p>
      <div className="flex px-10 py-3 overflow-x-scroll hide-scrollbar">
        <div className="flex gap-2 m-1 ">
          {movies?.map((movie,index) => {
            return (
              <MovieCard
                key={index}
                posterPath={movie?.poster_path}
              ></MovieCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
