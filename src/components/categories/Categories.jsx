import React from 'react'
import './categories.css'
import trailerLogo from '../../assets/images/trailer-logo.jpg'
import youtubeLogo from '../../assets/images/youtube.jpg'
import songsLogo from '../../assets/images/songs.png'
function Categories() {
  return (
    <div className='categories'>
        <div className='category-item'>
            <img alt='videos' className='category-image' src={trailerLogo}/>
            <h2>Videos</h2>
        </div>
        <div className='category-item'>
            <img alt='reviews' className='category-image'src={youtubeLogo}/>
            <h2>Reviews</h2>
        </div>
        <div className='category-item'>
            <img alt='songs' className='category-image' src={songsLogo}/>
            <h2>Songs</h2>
        </div>

    </div>
  )
}

export default Categories