import React from 'react'
import './HeroBanner.css'
import profile from '../../assets/images/profile.jpg'
import {motion} from 'framer-motion'
function HeroBanner() {
  return (
    <div className='banner'>
        <motion.img 
        className='cover-image'  
        src={profile}
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:1,type:'tween',duration:1}}
        />
    <motion.h1 
    animate={{y:0}}
    initial={{y:"100vh"}}
    transition={{delay:1}}
    >Thallumala Fan Page
    </motion.h1>
    </div>
  )
}

export default HeroBanner