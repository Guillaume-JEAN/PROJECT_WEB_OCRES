import React from 'react'
import "./chercherpersonnage.css"
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
                    <button className="ChercherpersonnageButton">Afficher le personnage</button>

                </div>
            </form>

        </div>
    )
}