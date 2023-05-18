import React from 'react'
import './Feed.css'
import { MdRssFeed } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import person from '../../Static/person.jpeg'

const Feed = () => {
  return (
    <div className='feed-container'>
      <div className='feed-wrapper'>
        <ul className='sidebar-list'>
          <li className='sidebar-listitem'>
            <MdRssFeed className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
          <li className='sidebar-listitem'>
            <MdRssFeed className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
          <li className='sidebar-listitem'>
            <MdRssFeed className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
          <li className='sidebar-listitem'>
            <MdRssFeed className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
          <li className='sidebar-listitem'>
            <MdRssFeed className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
          <li className='sidebar-listitem'>
            <IoSchoolOutline className='sidebaricons'/>
            <span className='sidebarlistname'>Feed</span>
          </li>
        </ul>
        <button className='sidebarbutton'>View More</button>
        <hr className='sidebarline'/>
        <ul className='sidebarfriendlist'>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
          <li className='sidebarfrienditem'>
            <img className='sidebarfriend' src={person} alt=''/>
            <span className='sidebarname'>Joel</span>
          </li>
         
         
        </ul>
      </div>
    </div>
  )
}

export default Feed