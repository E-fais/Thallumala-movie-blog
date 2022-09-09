import React,{useEffect} from 'react'
import Categories from '../../components/categories/Categories'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import MainContent from '../../components/MainContent/MainContent'
import './Home.css'
import {motion} from "framer-motion"

function Home({isAuth,setIsAuth}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const framerVariant={
    start:{
      opacity:0
    },
    final:{
      opacity:1
    },
    exit:{
      x:'-100vw',
      transition:{ease:'easeInOut'}
    }
  }
  
  return (
    <motion.div
    variants={framerVariant}
    initial='start'
    animate='final'
    exit='exit'
    >
        <HeroBanner/>
        <Categories/>
        <MainContent isAuth={isAuth} setIsAuth={setIsAuth}/>
    </motion.div>
  )
}

export default Home