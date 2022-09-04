import React, { useEffect } from "react";
import pic from "../../assets/images/youtube.jpg";
import "./videos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Videos() {
  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
  const navigate =useNavigate()
  return (
    <div >
      <div className="videos">
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="title"
        >
          Official Videos
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="trailer"
        >
          <img src={pic} />
        </motion.div>
      </div>
      <div className="allTrailers">
        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>
      </div>
      <h2 className="fan-title">Fan Made Videos</h2>
      <div className="fan-videos">
        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>
      </div>

      <div className="fan-videos">
        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>

        <div className="trailerBox">
          <img src={pic} />
        </div>
      </div>
      <div className="btn">
      <button 
      onClick={()=>navigate('/')}>
        Back to home page
        </button>
      </div>
    
    </div>
  );
}

export default Videos;
