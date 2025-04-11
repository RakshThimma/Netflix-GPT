import React, {useEffect} from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
    <div className="absolute w-screen bg-gradient-to-b z-20 from-black px-10 py-2 flex justify-between items-center">
      <img
        className="w-48"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex p-2 items-center gap-3">
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
