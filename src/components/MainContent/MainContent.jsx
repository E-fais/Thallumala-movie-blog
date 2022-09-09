import React, { useEffect, useState } from "react";
import "./MainContent.css";
import { motion } from "framer-motion";
import { auth, provider, db } from "../../firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import trash from "../../assets/icons/trash-icon-svg.svg";

import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  reviews,
} from "./Content";
import PostReview from "../PostReview/PostReview";
import Cast from "../cast/Cast";

function MainContent({ isAuth, setIsAuth }) {
  const signInHandler = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };
  const [reviewLists, setReviewList] = useState([]);
  const reviewCollectionRef = collection(db, "review");
  const deleteReview = async (id) => {
    const reviewDoc = doc(db, "review", id);
    await deleteDoc(reviewDoc);
  };
  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewCollectionRef);
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReviews();
    console.log(reviewLists);
  }, [deleteReview]);

  const buttonAnimation={
    hover:{
      scale:1.1,
    transition:{
      duration:0.4,
      yoyo:Infinity
    }
  }
  }

  return (
    <div>
      <div className="first-section">
        <div className="plot">
          <h2>The Plot</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
        </div>
        <div className="userReview">
          <h2>Fans reviews</h2>
          <div className="lineBreak"></div>
          <div className="postReview">
            {!isAuth ? (
              <motion.button
              variants={buttonAnimation}
              whileHover='hover'
               onClick={signInHandler}
               >
                Sign In To Add Review
                </motion.button>
            ) : (
              <PostReview />
            )}
          </div>

          {reviewLists.map((review) => {
            return (
              <div className="reviewBox">
                <div className="review-list">
                  <div >
                    <h4>{review.review}</h4>
                  </div>
                  <div>
                    {isAuth && review.author.id === auth.currentUser.uid && (
                      <img
                        onClick={() => deleteReview(review.id)}
                        src={trash}
                        alt="delete"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <p>@ {review.author.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="second-section">
       
        <h2>Top Cast</h2>
        <div className="lineBreak-2"></div>
        <div className="crew">
         <a href="https://en.wikipedia.org/wiki/Khalid_Rahman" target='-blank'>
           <h3>Director:Khalid Rahman</h3>
           </a>
       
          <h3> <a href="https://en.wikipedia.org/wiki/Muhsin_Parari" target="_blank">
            Writers:Muhsin Parari 
            </a>
            <a href="https://www.imdb.com/name/nm10622004/">
              & Ashraf Hamza
              </a>
              </h3>
          <a href="https://en.wikipedia.org/wiki/Ashiq_Usman" target='_blank'>
          <h3>Producer:Ashiq Usman</h3>
          </a>
        </div>
        <div className="cast-container">
          <Cast />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
