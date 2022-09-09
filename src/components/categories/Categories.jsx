import React from 'react'
import './categories.css'
import trailerLogo from '../../assets/images/trailer-logo.jpg'
import youtubeLogo from '../../assets/images/youtube.jpg'
import songsLogo from '../../assets/images/songs.png'
import {useNavigate} from 'react-router-dom'
function Categories() {
  const navigate=useNavigate()
  return (
    <div className='categories'>
        <div className='category-item'>
            <img alt='videos'
             className='category-image' 
             src={trailerLogo}
             onClick={()=>navigate('videos')}
             />
            <h2>Videos</h2>
        </div>
        <div className='category-item'>
            <img alt='reviews' 
            className='category-image'
            src={youtubeLogo}
            onClick={()=>navigate('reviews')}
            />
            <h2>Reviews</h2>
        </div>
    </div>
  )
}

export default Categories