import React, { useState } from "react";
import "./postReview.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function PostReview() {
  const navigate=useNavigate()
  const [review, setReview] = useState("");
  const reviewCollectionRef = collection(db, "review");
  const addReview = async () => {
    if(review)
   { await addDoc(reviewCollectionRef, {
      review,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });}
  setReview('')
   }
  
  return (
    <div>
      <h3>Write A Review</h3>
      <div className="review-input">
        <input
          onChange={(e) => {
            setReview(e.target.value);
          }}
          className="input"
          type="text"
          placeHolder="write your review here"
        />
        <button onClick={addReview}>Post Review</button>
      </div>
    </div>
  );
}

export default PostReview;
