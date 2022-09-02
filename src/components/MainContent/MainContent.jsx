import React from "react";
import "./MainContent.css";
import { paragraph1, paragraph2, paragraph3, paragraph4,reviews } from "./Content";

function MainContent() {
  return (
    <div className="main">
      <div className="plot">
        <h2>The Plot</h2>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
      </div>
      <div className="userReview">
        <h2>Fans reviews</h2>
        <div className='lineBreak'></div>
        <div className="postReview">
       <div> <input className="input" type='text'  placeHolder='write review...' /> </div>
        <div><button>Post Review</button></div>
        </div>
       
        
{reviews.map(review=>{
    return(
        <div className= "reviewBox">
            <h3>{review.name}</h3>
            <div className='lineBreak'></div>
            <p>{review.text}</p>
        </div>
    )
})}
      </div>
    </div>
  );
}

export default MainContent;
