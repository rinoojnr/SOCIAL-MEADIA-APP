import React from 'react'
import { MdOutlineNotificationsActive } from "react-icons/md"
import {CgProfile} from 'react-icons/cg'
import {TbMessageDots} from 'react-icons/tb'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='topbar-container'>
        <div className='topbarleft-container'>
            <span className='logo' >Facebook</span>
            <div className='topbarcentet-conatainer'>
                <div className='searchbar'>
                    <input placeholder='Search for accounts' className='searchinput'/>
                </div>
                <div className='topbarright-container'>
                    <div className='topbar-links'>
                        <span className='topbar-link'>
                            Home
                        </span>
                        <span className='topbar-link'>
                            About
                        </span>

                        <div className='topbar-icons'>
                            <div className='topbar-icon'>
                                <TbMessageDots />

                            </div>
                            <div className='topbar-icon'>
                                <MdOutlineNotificationsActive />
                           
                            
                                </div>
                            <div className='topbar-icon'>
                                <CgProfile />
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Navbar
