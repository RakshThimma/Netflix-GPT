// import React from 'react'

import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const SignInToggle = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative ">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8a8e44f-ffcf-490c-ad60-b7febe7736d0/web/IN-en-20250407-TRIFECTA-perspective_0d56dee1-00dd-4425-af41-40aee72b1038_large.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-1/5 left-1/3 w-3/12 p-5 m-2 border border-solid rounded-md bg-black/80">
        <h3 className="text-white px-2 m-2 text-3xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h3>
        <form className="text-center">
          <div className="flex flex-col gap-2 px-2 mx-7">
            {
              !isSignInForm && 
              <input
              className="p-2 my-2 bg-gray-500 w-full placeholder-gray-700"
              type="text"
              placeholder="Name"
            />
            }
            <input
              className="p-2 my-2 bg-gray-500 w-full placeholder-gray-700"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 my-2 bg-gray-500 placeholder-gray-700 w-full"
              type="password"
              placeholder="Password"
            />
            <button className="text-white my-2 bg-red-500 p-2 w-full border border-red-500">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white"> {isSignInForm ? "New to Netflix?" : "Already a User?"} <a className="cursor-pointer underline" onClick={SignInToggle}> {isSignInForm ? "Sign Up" : "Sign In"}</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
