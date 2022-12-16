import React from 'react'
import axios from 'axios';
import './supprimerpersonnage.css'



class Supprimerpersonnage extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            Nom: '',
        }
    }

    upNom(e)
    {
        this.setState({Nom: e.target.value})
    }

    requete()
    {
        const Nom = {
            Nom: this.state.Nom,
        };

        axios.post('http://localhost:3001/Characters/delete', Nom)
            .then(console.log("test"))
            .catch((err) => {
                console.log(err);
            })
    }
    render=()=>
    {
    return(
        <div className="recherche">
            <form>
                <h1 className="chercherpersonnageTitle">Suprimer votre Personnage</h1>
                <div className="creerpersonnageItem">
                    <label>Veuillez saisir le nom du personnage</label>
                    <input
                        className="search"
                        value = {this.state.Nom} onChange={(e)=>this.upNom(e)}
                        placeholder="nom du personnage à supprimer"
                    />
                    <button className="supprimerpersonnageButton"onClick={()=>this.requete()}>Supprimer </button>


                </div>
            </form>
            <div className="flexbox-container">
                <div className="flexbox-item- flexbox-item-1">

                </div>
            </div>

        </div>


    )
}
}
export default Supprimerpersonnage;