import React from 'react'
import axios from 'axios';
import "./creerpersonnage.css"

class Creerpersonnage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            Nom:'',
            Niveau:'',
            Force:'',
            Dexterite:'',
            Constitution:'',
            Sagesse:'',
            Charisme:'',
            Intelligence:'',
            description:'',
        }
    }

    upNom(e)
    {
        this.setState({Nom: e.target.value})
    }
    upNiveau(e)
    {
        this.setState({Niveau: e.target.value})
    }
    upForce(e)
    {
        this.setState({Force: e.target.value})
    }
    upDexterite(e)
    {
        this.setState({Dexterite: e.target.value})
    }
    upConstitution(e)
    {
        this.setState({Constitution: e.target.value})
    }
    upSagesse(e)
    {
        this.setState({Sagesse: e.target.value})
    }
    upIntelligence(e)
    {
        this.setState({Intelligence: e.target.value})
    }
    upCharisme(e)
    {
        this.setState({Charisme: e.target.value})
    }
    upDescription(e)
    {
        this.setState({description: e.target.value})
    }


    requete()

        { const character = {
            Nom:this.state.Nom,
            Niveau:this.state.Niveau,
            Force:this.state.Force,
            Dexterite:this.state.Dexterite,
            Constitution:this.state.Constitution,
            Sagesse:this.state.Sagesse,
            Charisme:this.state.Charisme,
            Intelligence:this.state.Intelligence,
            description: this.state.description,
        };


        axios.post('http://localhost:3001/Characters/AddCharacter', character)
            .then(console.log("test"))
            .catch((err) => {
                console.log(err);
            })
    }
    render=()=>
    {
    return (
        <div className="creerpersonnage">
            <h1 className="creerpersonnageTitle">Creer votre Personnage</h1>
            <form className="creerpersonnageForm">
                <div className="creerpersonnageItem">
                    <label>Username</label>
                    <input type="text" value = {this.state.Nom} onChange={(e)=>this.upNom(e)} placeholder="john" />
                </div>

                <div className="creerpersonnageItem">
                    <label>Niveau</label>
                    <input type="number" value = {this.state.Niveau} onChange={(e)=>this.upNiveau(e)} placeholder="1" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Force</label>
                    <input type="number" value = {this.state.Force} onChange={(e)=>this.upForce(e)} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Dexterité</label>
                    <input type="number" value = {this.state.Dexterite} onChange={(e)=>this.upDexterite(e)} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Constitution</label>
                    <input type="number" value = {this.state.Constitution} onChange={(e)=>this.upConstitution(e)}  placeholder="10" />
                    </div>
                <div className="creerpersonnageItem">
                    <label>Sagesse</label>
                    <input type="number" value = {this.state.Sagesse} onChange={(e)=>this.upSagesse(e)}  placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Charisme</label>
                    <input type="number"  value = {this.state.Charisme} onChange={(e)=>this.upCharisme(e)} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Intelligence</label>
                    <input type="number" value = {this.state.Intelligence} onChange={(e)=>this.upIntelligence(e)}  placeholder="10" />
                </div>

                <div className="creerpersonnageItem">
                    <label>Gender</label>
                    <div className="creerpersonnageGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>


                <div className="flexbox-container">
                    <div className="flexbox-item-1">
                        <div className="creerpersonnageItem">
                            <input type="text" value = {this.state.description} onChange={(e)=>this.upDescription(e)} placeholder="Entrez la description du visage de votre personnage en Anglais" />
                        </div>
                    </div>

                </div>
                <button className="creerpersonnageButton" onClick={()=>this.requete()}>Create</button>
        </form>

        </div>
    );
}
}
export default Creerpersonnage;
