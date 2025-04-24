import React, { useRef } from "react";
import language from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langToUse = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GOOGLE_GENAI_API_KEY,
  }); //Gemini API docs copied and replaced api key

  const SearchMovieInTMDB = async (movieName) => {
    console.log(movieName);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    return json.results;
  };

  const handleSearch = async () => {
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma-separated like this: Gadar, Sholay, Godzilla, Pathaan, 3 Idiots."; // Get the input value

    if (!prompt) {
      console.error("No search text entered");
      return;
    }
    //Gemini fetch api method
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    const GPTMovieResponse = response.text.split(",");

    const PromiseArray = GPTMovieResponse.map((movie) =>
      SearchMovieInTMDB(movie)
    );

    const TMDBResults = await Promise.all(PromiseArray);

    console.log(TMDBResults);

    dispatch(
      addGPTMovies({ movieNames: GPTMovieResponse, movieResults: TMDBResults })
    );
  };

  
 
  return (
    <div className="">
      <form
        className="bg-black text-white w-4/5  md:w-5/12 p-2 mx-auto md:grid md:grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[langToUse].placeholder}
          className="px-2 py-1 m-1 col-span-9 bg-white text-black text-sm md:text-md md:px-4 md:py-2"
        />
        <button className="bg-red-500 m-1 col-span-3 text-sm md:text-md px-2 py-1" onClick={handleSearch}>
          {language[langToUse].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
