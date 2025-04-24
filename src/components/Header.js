import React, {useEffect} from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import {toggleShowGptSearch} from "../utils/GptSlice";
import { SelectLang } from "../utils/langConstants";
import { ChangeLang } from "../utils/configSlice";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const user = useSelector((store) => store.user);
  const GptSearchToggle = useSelector((store) => store.gpt.showGptSearch);
  const handleLangChange = (e) => {
    // console.log(e.target.value)
    dispatch(ChangeLang(e.target.value));
  }
  const handleSearchToggle = () => {
    dispatch(toggleShowGptSearch())
    
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("AUTH USER:", user);
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
     // unsubscribe when component unmounts
      return () => unsubscribe();
    });
  }, []);
  return (
    <div className={`fixed top-0 w-full bg-gradient-to-b z-50 from-black via-transparent px-10 py-2 flex justify-between items-center ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <img
        className="w-48"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex p-2  items-center gap-3">
          {GptSearchToggle && <select className="px-2 py-2 m-2 text-white bg-black w-24 border-black" onChange={handleLangChange}>
            {
              SelectLang.map((lang) => {
               return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              })
            }
            
          </select>}
          <button className="bg-purple-800 text-white rounded-lg px-4 py-2 " onClick={handleSearchToggle}>{ GptSearchToggle ? "Home Page" :"GPT Search"}</button>
          <img className="w-12 rounded-full" src={user?.photoURL} alt="User" />
          <button
            onClick={handleSignOut}
            className="p-2 text-white border border-red-500 bg-red-500 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
