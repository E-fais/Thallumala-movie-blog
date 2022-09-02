import React from 'react'
import Categories from '../components/categories/Categories'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import MainContent from '../components/MainContent/MainContent'
import './Home.css'

function Home() {
  return (
    <div>
        <HeroBanner/>
        <Categories/>
        <MainContent/>
    </div>
  )
}

export default Home