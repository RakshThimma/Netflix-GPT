import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    
      <div className="overflow-hidden  bg-black/90 text-white p-2"> {/* Ensure no conflicting overflow styles */}
      {movieNames.map((movieName, index) => {
        return (
          <MovieList 
            key={movieName}
            title={movieName}
            movies={movieResults[index]} 
          />
        );
      })}
    </div>
    
  );
};

export default GptMovieSuggestions;
