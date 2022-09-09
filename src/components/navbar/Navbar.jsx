import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./navbar.css";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase/FirebaseConfig";
import {motion} from 'framer-motion'
function Navbar({ isAuth, setIsAuth }) {
 
  const navigate= useNavigate()
  const signInHandler = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate(0)
    });
    
  };
  return (
    <div className="navbar">
      <div>
       <Link to='/'>
         <motion.h3
        
         whileHover={{
          scale:1.1,
         color:'white'
        }}
         >Home</motion.h3>
         </Link>
      </div>
      <div className="videos">
        <Link to='videos'>
          <motion.h3
          whileHover={{
            scale:1.1,
           color:'white'
          }} 
          >Videos</motion.h3>
        </Link>
      </div>
      <div className="reviews">
        <Link to='reviews'>
          <motion.h3
          whileHover={{
            scale:1.1,
           color:'white'
          }} 
          >Reviews</motion.h3>
        </Link>
      </div>
      <div
      >
         
        {isAuth ? (
          <motion.button 
          whileHover={{
            scale:1.1,
           color:'white'
          }} 
          className="login-btn" onClick={signOutUser}>
            Sign Out
            </motion.button>
        ) : (<div>
          <motion.button
          whileHover={{
            scale:1.1,
           color:'white'
          }} 
           className="login-btn" onClick={signInHandler}>
            Sign In
            </motion.button>
          </div>
        )}
    
      </div>
    </div>
  );
}

export default Navbar;
