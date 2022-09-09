import React, { useEffect } from "react";
import pic from "../../assets/images/youtube.jpg";
import "./videos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
const mainVariant = {
  start: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
     
    },
  },
};

const childVariant = {
  start: {
   opacity:0,
  },
  final: {
    opacity:1,
    transition:{
      duration:1
    }
  },
};
function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const opts = {
    height: "200px",
    width: "300px",
  };
  return (
    <motion.div variants={mainVariant} initial="start" animate="final">
      <div className="videos">
        <motion.h1 variants={mainVariant} className="title">
          Thallumala Videos
        </motion.h1>

        <motion.div variants={childVariant} className="main-trailer">
          <YouTube videoId="s_OdRGbpKUA" />
        </motion.div>
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
      <h2 className="fan-title">Songs</h2>
      <div className="fan-videos">
        <div className="trailerBox">
          <YouTube opts={opts} videoId="Bm48lOWNpBI" />
        </div>

        <div className="trailerBox">
          <YouTube opts={opts} videoId="_eWvDaztcjI" />
        </div>

        <div className="trailerBox">
          <YouTube opts={opts} videoId="HCMLmkPFeik" />
        </div>
      </div>
      <div className="fan-videos">
        <div className="trailerBox">
          <YouTube opts={opts} videoId="JBDP0hRdB7s" />
        </div>

        <div className="trailerBox">
          <YouTube opts={opts} videoId="a0K0uBd5yHY" />
        </div>
      </div>
    </motion.div>
  );
}

export default Videos;
