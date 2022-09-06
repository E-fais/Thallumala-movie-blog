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
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5,duration:2}}
        />
    <motion.h1 className='page-title'
    animate={{y:0}}
    initial={{y:"-100vh"}}
    transition={{delay:1,type:'spring',stiffness:300}}
    >Thallumala Fan Page
    </motion.h1>
    </div>
  )
}

export default HeroBanner