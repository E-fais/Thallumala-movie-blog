import React from 'react'
import Home from './pages/home/Home'
import {Route,Routes} from 'react-router-dom'
import Videos from './pages/videos/Videos'
import Reviews from './pages/reviews/Reviews'
import Songs from './pages/songs/Songs'

function App() {
 
  return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
       <Route path='videos' element={<Videos/>}/>
       <Route path='reviews' element={<Reviews/>}/>
       <Route path='songs' element={<Songs/>}/>
        </Routes>
  )
}

export default App