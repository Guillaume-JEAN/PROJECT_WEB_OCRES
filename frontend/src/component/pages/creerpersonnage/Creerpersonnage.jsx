import React, {useState} from 'react'
import axios from 'axios';
import "./creerpersonnage.css"

function Creerpersonnage() {
         const [input, setInput]= useState({
            Nom:'',
            Niveau:'',
            Force:'',
            Dexterite:'',
            Constitution:'',
            Sagesse:'',
            Charisme:'',
            Intelligence:'',
            description:''

    })
    function HandleChange(event){
             const {name, value} = event.target;

             setInput(prevInput => {
                 return{
                     ...prevInput,
                     [name]: value
                 }

             })
    }
    function handleClick(event){
          event.preventDefault();
          const NewCharacter = {
                Nom:input.Nom,
                Niveau: input.Niveau,
                Force: input.Force,
                Dexterite:input.Dexterite,
                Constitution:input.Constitution,
                Sagesse:input.Sagesse,
                Charisme:input.Charisme,
                Intelligence:input.Charisme,
                description:input.description
        }
        axios.post('http://localhost:3001/Characters/AddCharacter', NewCharacter)
            .then(console.log("test"))
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="creerpersonnage">
            <h1 className="creerpersonnageTitle">Creer votre Personnage</h1>
            <form className="creerpersonnageForm">
                <div className="creerpersonnageItem">
                    <label>Username</label>
                    <input onChange={HandleChange} name="Nom" value= {input.Nom}   placeholder="john" />
                </div>

                <div className="creerpersonnageItem">
                    <label>Niveau</label>
                    <input  onChange={HandleChange} name="Niveau"  value= {input.Niveau} placeholder="1" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Force</label>
                    <input onChange={HandleChange} name="Force"  value= {input.Force} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Dexterité</label>
                    <input  onChange={HandleChange} name="Dexterite"  value= {input.Dexterite} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Constitution</label>
                    <input onChange={HandleChange} name="Constitution"  value= {input.Constitution} placeholder="10" />
                    </div>
                <div className="creerpersonnageItem">
                    <label>Sagesse</label>
                    <input  onChange={HandleChange} name="Sagesse"  value= {input.Sagesse} placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Charisme</label>
                    <input   onChange={HandleChange} name="Charisme"  value= {input.Charisme}placeholder="10" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Intelligence</label>
                    <input  onChange={HandleChange} name="Intelligence"  value= {input.Intelligence} placeholder="10" />
                </div>

                <div className="flexbox-container">
                    <div className="flexbox-item-1">
                        <div className="creerpersonnageItem">
                            <input  onChange={HandleChange} name="description"  value= {input.description} placeholder="Entrez la description du visage de votre personnage en Anglais" />
                        </div>
                    </div>

                </div>
                <button className="creerpersonnageButton" onClick={handleClick}>Create</button>
        </form>

        </div>
    );
}
export default Creerpersonnage;
