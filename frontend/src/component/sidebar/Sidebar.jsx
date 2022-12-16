import React from 'react'
import "./sidebar.css"
import { MdLineStyle } from "react-icons/md";
import {FiUser} from "react-icons/fi";
import { MdDelete ,} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import {Link} from "react-router-dom"


export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
              <h3 className='sidebarTitle>'>Dashbord</h3>
              <ul className="sidebarList">
                  <li className='sidebarListItem'>
                      <MdLineStyle />
                      <Link to="/">
                          <p className={'{activeTab=== "Home"?"active:""}'}>Home</p>
                      </Link>
                  </li>
                  <li className='sidebarListItem'>
                      <AiOutlineUserAdd />
                      <Link to="/CréerunPersonnage/:id">
                          <p className={'{activeTab=== "Créer un Personnage"?"active:""}'}>Créer un Personnage</p>
                      </Link>

                  </li>
                  <li className='sidebarListItem'>
                      <MdDelete />
                      <Link to="/Supprimerunpersonnage/:id">
                          <p className={'{activeTab=== "Supprimer un personnage/:id"?"active:""}'}>Suppprimer un personnage</p>
                      </Link>

                  </li>
                  <li className='sidebarListItem'>
                      <FiUser />
                      <Link to="/Chercherunpersonnage">
                          <p className={'{activeTab=== "chercher un personnage/:id"?"active:""}'}>Chercher un personnage</p>
                      </Link>

                  </li>
                  <li className='sidebarListItem'>
                      <FiUser />
                      <Link to="/Votrepersonnage">
                          <p className={'{activeTab=== "/Votrepersonnage"?"active:""}'}>Votre personnage</p>
                      </Link>

                  </li>
              </ul>
          </div>


      </div>
    </div>

  )
}
