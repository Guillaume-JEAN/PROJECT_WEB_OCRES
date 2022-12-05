import React from 'react'
import './supprimerpersonnage.css'



export default function Supprimerpersonnage(){
    return(
        <div className="recherche">
            <form>
                <h1 className="chercherpersonnageTitle">Suprimer  votre Personnage</h1>
                <div className="creerpersonnageItem">
                    <label>Veuillez saisir le nom du personnage</label>
                    <input
                        className="search"
                        placeholder="Search..."
                    />
                    <button className="supprimerpersonnageButton">
                        Supprimer le personnage

                    </button>


                </div>
            </form>

        </div>


    )
}