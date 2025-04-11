// import React from 'react'

import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, setErrormsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    const emailVal = email.current?.value;
    const passwordVal = password.current?.value;
    const nameVal = isSignInForm ? null : name.current?.value;

    const validation = checkValidData(emailVal, passwordVal, nameVal);
    console.log(validation);
    setErrormsg(validation);
    if (validation) return;
    //Sign In/Sign Up
    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal,
            photoURL:PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrormsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user)
          const { uid, email, displayName, photoURL } = auth.currentUser;
dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorCode + " - " + errorMessage);
        });
    }
  };

  const SignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

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
        <h3 className="text-white px-2 m-2 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h3>
        <form onSubmit={(e) => e.preventDefault()} className="text-center">
          <div className="flex flex-col gap-2 px-2 mx-7">
            {!isSignInForm && (
              <input
                ref={name}
                className="p-2 my-2 bg-gray-500 w-full placeholder-gray-700"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className="p-2 my-2 bg-gray-500 w-full placeholder-gray-700"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="p-2 my-2 bg-gray-500 placeholder-gray-700 w-full"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-600 text-sm">{errormsg}</p>
            <button
              onClick={handleBtnClick}
              className="text-white my-2 bg-red-500 p-2 w-full border border-red-500"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white">
              {" "}
              {isSignInForm ? "New to Netflix?" : "Already a User?"}{" "}
              <a className="cursor-pointer underline" onClick={SignInToggle}>
                {" "}
                {isSignInForm ? "Sign Up" : "Sign In"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
