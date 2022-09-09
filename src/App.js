import React, {useState } from 'react'
import Home from './pages/home/Home'
import {Route,Routes,useLocation} from 'react-router-dom'
import Videos from './pages/videos/Videos'
import Reviews from './pages/reviews/Reviews'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import{AnimatePresence} from "framer-motion"

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'))
  const location=useLocation()
  return (<>
   
  
    <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
    <AnimatePresence>
    <Routes>
      <Route location={location} key={location.pathname}  path='/' element= {<Home isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
       <Route path='videos' element={<Videos/>}/>
       <Route path='reviews' element={<Reviews/>}/>
        </Routes>
        </AnimatePresence>
        <Footer/>
        </>
  )
}

export default App