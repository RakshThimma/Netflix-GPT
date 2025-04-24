import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-4">
      <p className="text-white md:text-2xl text-md font-bold px-12 py-2">{title}</p>
      <div className="flex px-10 py-3 overflow-x-auto hide-scrollbar">
        <div className="flex gap-2">
          {movies?.map((movie, index) => (
            <MovieCard key={index} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
