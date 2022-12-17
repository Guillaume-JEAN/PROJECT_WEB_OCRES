import React , { useEffect, useState } from 'react'
//import axios from "axios";

import "./chercherpersonnage.css"
import {Link} from "react-router-dom";
function Chercherpersonnage(){

    const [Characters, setCharacters] = useState([{
        Nom:'',
        Niveau:'',
        Force:'',
        Dexterite:'',
        Constitution:'',
        Sagesse:'',
        Charisme:'',
        Intelligence:'',
        description:''
    }])

    useEffect(()=>{
        fetch("/Characters").then(res => {
            if (res.ok){
                return res.json()
            }
        }).then(jsonRes => setCharacters(jsonRes))
    })


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
                    <button className="ChercherpersonnageButton" > Afficher la liste des personnages</button>

                </div>
            </form>
            <div className="flexbox-container">
                <div className="flexbox-item- flexbox-item-1">
                    {Characters.map(Characters =>
                    <div>{}
                        <h1>{Characters.Nom}</h1>
                        <h1>{Characters.Niveau}</h1>
                        <h1>{Characters.description}</h1>
                    </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Chercherpersonnage;