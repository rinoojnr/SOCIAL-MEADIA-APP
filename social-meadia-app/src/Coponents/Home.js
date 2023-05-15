import React from 'react'
import Centerfeed from './Feed/Centerfeed'
import Feed from './Feed/Feed'
import Rightfeed from './Feed/Rightfeed'
import Navbar from './Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home-container'>
      <Feed />
      <Centerfeed />
      <Rightfeed />
      </div>
      
    </div>
  )
}

export default Home
