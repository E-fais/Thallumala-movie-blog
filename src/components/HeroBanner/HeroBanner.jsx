import React from 'react'
import './HeroBanner.css'
import profile from '../../assets/images/profile.jpg'
function HeroBanner() {
  return (
    <div className='banner'>
        <img className='cover-image'  src={profile}/>
    <h1>Thallumala Fan Page</h1>
    </div>
  )
}

export default HeroBanner