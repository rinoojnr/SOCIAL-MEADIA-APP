import React from 'react'
import './Centerfeed.css'
import person from '../../Static/person.jpeg'
const Centerfeed = () => {
  return (
    <div className='center-feed-container'>
        <div className='centerfeed-wrapper'>
        <img className='centerbarfriend' src={person} alt=''/>
        <input placeholder='What is in your mind...?' className='centersearchtext'/>
        <hr className='shareHr'/>
        </div>
        {/* <div className='post-container'>
        <img className='centerbarfriend' src={person} alt=''/>
        </div> */}

    </div>
  )
}

export default Centerfeed