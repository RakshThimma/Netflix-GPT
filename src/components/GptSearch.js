import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex justify-center  items-center flex-col pt-20 m-10 overflow-x-hidden">
      <div className="z-30 p-4 m-4 w-full  h-20">
        <GptSearchBar />
      </div>
      <div className="w-19/20">
        <GptMovieSuggestions />
      </div>
      <div className="-z-20 overflow-hidden fixed top-0 left-0 w-full">
        <img src={BG_IMAGE_URL} alt="" />
      </div>
    </div>
  );
};

export default GptSearch;
