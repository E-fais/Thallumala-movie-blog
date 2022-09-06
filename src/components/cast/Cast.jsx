import React from "react";
import './cast.css'

function Cast() {
  return (
    <>
    <div className="cast">
      <a href="https://en.wikipedia.org/wiki/Tovino_Thomas" target='_blank'>
      <div className="card">
        <div> 
        <img
        src="https://images.livemint.com/img/2022/04/12/1600x900/1_1649741663253_1649741675846.jpg" />
        </div>
        <div className="card-text">
            <h3>Tovino Thomas</h3>
            <p>Manavalan Wazim</p>
        </div>
      </div>
      </a>
      <a href="https://en.wikipedia.org/wiki/Kalyani_Priyadarshan" target="_blank">
      <div className="card">
       <div> 
        <img src="https://biic.org.in/wp-content/uploads/2022/08/1661460528_Kalyani-Priyadarshan-BiographyWiki-Age-Height-Photos-More.jpg" />
        </div>
        <div className="card-text">
            <h3>Kalyani Priyadarshan</h3>
            <p>Beepaathu</p>
        </div>
      </div>
      </a>
      <a href="https://en.wikipedia.org/wiki/Shine_Tom_Chacko" target="_blank">
      <div className="card">
       <div> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Shinetom.png" />
        </div>
        <div className="card-text">
            <h3>Shine Tom Chacko</h3>
            <p>Reji</p>
        </div>
      </div>
      </a>
    </div>
    <div className="cast">
    <a href="https://en.everybodywiki.com/Lukman_Avaran" target='_blank'>
      <div className="card">
        <div> 
        <img
        src="https://starktimes.com/wp-content/uploads/2022/04/Lukman-Lukku-6.jpg" />
        </div>
        <div className="card-text">
            <h3>Lukman Avaran</h3>
            <p>jamshi</p>
        </div>
      </div>
      </a>
      <a href="https://m.imdb.com/name/nm13964792/?ref_=tt_cl_i_8" target="_blank">
      <div className="card">
       <div> 
        <img src="https://d14u0p1qkech25.cloudfront.net/1854902917_2c07f5b6-cb53-4e63-9bef-d6de7296251b_thumbnail_250x250" />
        </div>
        <div className="card-text">
            <h3>Swathi Das Prabhu
            </h3>
            <p>Sathar</p>
        </div>
      </div>
      </a>
      <a href="https://www.imdb.com/name/nm10777809/" target="_blank">
      <div className="card">
       <div> 
        <img src="https://nettv4u.com/imagine/04-09-2019/austin-dan.jpg" />
        </div>
        <div className="card-text">
            <h3>Austin Dan</h3>
            <p>Vikas</p>
        </div>
      </div>
      </a>
    </div>
    </>
  );
}

export default Cast;
