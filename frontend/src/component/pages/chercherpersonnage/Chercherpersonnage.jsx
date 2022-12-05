import React from 'react'
import "./chercherpersonnage.css"
import {Link} from "react-router-dom";
export default function Chercherpersonnage(){
    return(
        <div className="recherche">
            <form>
                <h1 className="chercherpersonnageTitle">Chercher  votre Personnage</h1>
                <div className="creerpersonnageItem">
                    <label>Veuillez saisir le nom du personnage</label>
                    <input
                    className="search"
                    placeholder="Search..."
                     />
                    <button className="ChercherpersonnageButton">
                        <Link to="/Votrepersonnage">
                            <p className={'{activeTab=== "/Votrepersonnage"?"active:""}'}>Afficher le personnage</p>
                        </Link>
                    </button>

                </div>
            </form>

        </div>
    )
}