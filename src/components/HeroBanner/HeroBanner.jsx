import React from 'react'
import './HeroBanner.css'
import profile from '../../assets/images/profile.jpg'
import {motion} from 'framer-motion'
function HeroBanner() {
const animationVariant={
  start:{
    x:'-100vw',
    opacity:0
  },
  final:{
    x:0,
    opacity:1,
    transition:{
    stiffness:120,
    }
  }
}
const childAnimation={
}
  return (
    <div 
    className='banner'
    >
        <motion.img 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:1.5
        }}
        className='cover-image'  
        src='https://www.kerala9.com/wp-content/uploads/2022/07/thallumaala-movie-photos-012.jpg'
        />
    <motion.h1
    initial={{x:'100vh'}}
    animate={{x:0}}
    transition={{
      type:'spring',
      stiffness:120
    }}
    className='page-title'
    >Thallumala Fan Page
    </motion.h1>
    </div>
  )
}

export default HeroBanner