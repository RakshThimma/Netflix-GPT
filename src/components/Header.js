import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-10 py-2 flex justify-between items-center">
      <img
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex p-2 items-center gap-3">
          <img className="w-12 rounded-full" src={user?.photoURL} alt="User" />
          <button onClick={handleSignOut} className="p-2 text-white border border-red-500 bg-red-500 rounded">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
