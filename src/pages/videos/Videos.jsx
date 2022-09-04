import React, { useEffect } from "react";
import pic from "../../assets/images/youtube.jpg";
import "./videos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
function Videos() {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const opts={
    height:'200px',
    width:'300px'
  }
  return (
    <div>
      <div className="videos">
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="title"
        >
          Thallumala Videos
        </motion.h1>
        <div
        className='main-trailer'
        >
         <YouTube 
         videoId="s_OdRGbpKUA" 
         />
        </div>
      </div>
      <div className="allTrailers">
        <div className="trailerBox">
          <YouTube opts={opts} videoId="Ljhpp2m1T34" />
        </div>

        <div className="trailerBox">
        <YouTube opts={opts} videoId="KKc5ttd88qc" />
        </div>

        <div className="trailerBox">
        <YouTube opts={opts} videoId="48cK_5NQcGw" />
        </div>
      </div>
      <h2 className="fan-title">Interviews</h2>
      <div className="fan-videos">
        <div className="trailerBox">
        <YouTube opts={opts} videoId="PPcZGXJPqWc" />
        </div>

        <div className="trailerBox">
        <YouTube opts={opts} videoId="BKtm2VyRJDQ" />
        </div>
        <div className="trailerBox">
        <YouTube opts={opts} videoId="iKRi0o5f8i0" />
        </div>

      </div>
      <h2 className="fan-title">Trolls and Reels</h2>
      <div className="fan-videos">
        <div className="trailerBox">
        <YouTube opts={opts} videoId="I7wVYSG6PYo" />
        </div>

        <div className="trailerBox">
        <YouTube opts={opts} videoId="nvs-h1cr9DQ" />
        </div>

        <div className="trailerBox">
        <YouTube opts={opts} videoId="fS99GRvLyiU" />
        </div>
      </div>
      <div className="btn">
        <button onClick={() => navigate("/")}>Back to home page</button>
      </div>
    </div>
  );
}

export default Videos;
