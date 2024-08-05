import React from 'react'
import SidebarButton from '../../Components/sidebarbutton/sidebarButton'
import { MdOutlinePodcasts } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BiSolidPlaylist } from "react-icons/bi";

import './sidebar.css'

function sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='icon-body'>
        <img  className='icon-Img' alt='musicIcon' src='/icon2.jpg' />
        <div className='icon-content'><p className='icon-inmusic'>inMusic <span className='icon-app'>AppUI Kit</span> </p></div>
        </div>
      <div className='sidebar-button'>
      <SidebarButton  title="Playlists" to="/callback" icon={<BiSolidPlaylist />} />
      
      <SidebarButton title="Videos" to="/videos" icon={<BiSolidVideos/>}  />
      <SidebarButton  title="Toplists" to="" icon={<BiBarChartAlt/>} />
      <SidebarButton  title="Discover" to="" icon={<RiCompassDiscoverFill/>}  />
      <SidebarButton  title="Favourites" to="" icon={<FaRegHeart/>}  />
      <SidebarButton  title="Messages" to="" icon={<BiSolidMessageSquareDetail/>}  />
      <SidebarButton  title="Podcasts" to="" icon={<MdOutlinePodcasts/>} />
      </div>
      
    </div>
  )
}

export default sidebar
