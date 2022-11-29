import React from 'react'
import "./sidebar.css"
import { MdLineStyle } from "react-icons/md";
import {FiTrendingUp,FiUser} from "react-icons/fi";
import { MdTimeline,MdFeedback ,MdOutlineReport} from "react-icons/md";
export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
              <h3 className='sidebarTitle>'>Dashbord</h3>
              <ul className="sidebarList">
                  <li className='sidebarListItem'>
                      <MdLineStyle />
                      Home
                  </li>
                  <li className='sidebarListItem'>
                      <MdTimeline />
                      analytics
                  </li>
                  <li className='sidebarListItem'>
                      <FiTrendingUp />
                      Sales
                  </li>
              </ul>
          </div>
          <div className='sidebarMenu'>
              <h3 className='sidebarTitle>'>Menu</h3>
              <ul className="sidebarList">
                  <li className='sidebarListItem'>
                      <FiUser />
                      Users
                  </li>
                  <li className='sidebarListItem'>
                      <MdFeedback />
                      FeedBack
                  </li>
                  <li className='sidebarListItem'>
                      <MdOutlineReport />
                      Report
                  </li>
              </ul>
          </div>

      </div>
    </div>

  )
}
