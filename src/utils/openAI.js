import OpenAI from 'openai';
// // // import { OPENAI_API_KEY } from './constants';

// const client = new OpenAI({
//   apiKey: "sk-uvwxijklmnop1234uvwxijklmnop1234uvwxijkl", // This is the default and can be omitted
//   dangerouslyAllowBrowser: true 
// });

// export default client

// import { GoogleGenAI } from "@google/genai";
// import { GEMINI_API_KEY } from "./constants";

// const apiKey = process.env.REACT_APP_GOOGLE_GENAI_API_KEY;

// console.log("API Key:", process.env.REACT_APP_GOOGLE_GENAI_API_KEY);

// if (!apiKey) {
//   console.error("API Key is missing");
// }
// const ai = new GoogleGenAI(apiKey);

// export default ai;
// import OpenAI from "openai";
// // import { GEMINI_API_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: "AIzaSyBPT83GptpouRaXBBtzmKxwcO1fXjQU-Yk",
  dangerouslyAllowBrowser: true,
});

export default openai;