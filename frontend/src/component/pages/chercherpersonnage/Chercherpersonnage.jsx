import React from 'react'
import axios from "axios";
import personnage from '../personnage';
import "./chercherpersonnage.css"
import {Link} from "react-router-dom";
class Chercherpersonnage extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            liste : undefined,
        }

    }

    getCharacter()
    {
        axios.get(`http://localhost:3001/Characters/liste/Character`)
            .then(res => {
                const nvliste = res.data;
                this.setState({ liste: nvliste });
            });
    }
    affichage()
    {
        let liste = [];
        let taille;
        !!this.state.liste && (taille = this.state.liste.length);
        for(let i=0;i<taille;i++)
        {
            !!this.state.liste && (liste.push(<personnage key ={i} data={this.state.liste[i]}/>));
        }
        return(<div>{liste}</div>);
    }
    render=()=>
    {
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
                    <button className="ChercherpersonnageButton" onClick={()=>this.getCharacter()}> Afficher la liste des personnages</button>

                </div>
            </form>
            <div className="flexbox-container">
                <div className="flexbox-item- flexbox-item-1">
                    {this.affichage()}
                </div>

            </div>

        </div>
    )
}
}
export default Chercherpersonnage;