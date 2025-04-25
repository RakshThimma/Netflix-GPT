import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex justify-center  items-center flex-col  m-10 overflow-x-hidden pt-30 hide-scrollbar md:h-1/2 md:pt-20">
      <div className="z-30 md:px-4  md:py-2 md:mx-4 md:my-2 w-full h-20  md:pt-0 md:h-30">
        <GptSearchBar />
      </div>
      <div className="w-19/20">
        <GptMovieSuggestions />
      </div>
      <div className="-z-20 overflow-hidden fixed top-0 left-0 w-full">
        <img src={BG_IMAGE_URL} className="h-screen object-cover md:h-screen w-screen" alt="" />
      </div>
    </div>
  );
};

export default GptSearch;
