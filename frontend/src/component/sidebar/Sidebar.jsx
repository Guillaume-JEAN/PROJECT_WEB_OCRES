import React from 'react'
import "./sidebar.css"
import { MdLineStyle } from "react-icons/md";
import {FiUser} from "react-icons/fi";
import { MdDelete ,} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";


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
                      <AiOutlineUserAdd />
                      Crée un Personnage
                  </li>
                  <li className='sidebarListItem'>
                      <MdDelete />
                      Suppprimer un personnage
                  </li>
                  <li className='sidebarListItem'>
                      <FiUser />
                      Chercher un personnage
                  </li>
                  <li className='sidebarListItem'>
                      <FiUser />
                      Votre presonnage
                  </li>
              </ul>
          </div>


      </div>
    </div>

  )
}
