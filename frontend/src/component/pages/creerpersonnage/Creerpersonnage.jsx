import React from 'react'
import "./creerpersonnage.css"


export default function Creerpersonnage() {
    return (
        <div className="creerpersonnage">
            <h1 className="creerpersonnageTitle">Creer votre Personnage</h1>
            <form className="creerpersonnageForm">
                <div className="creerpersonnageItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Niveau</label>
                    <input type="password" placeholder="ELITE" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Force</label>
                    <input type="text" placeholder="Force" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Dexterité</label>
                    <input type="text" placeholder="Dexterité" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Constitution</label>
                    <input type="text" placeholder="Constitution" />
                    </div>
                <div className="creerpersonnageItem">
                    <label>Sagesse</label>
                    <input type="text" placeholder="Sagesse" />
                </div>
                <div className="creerpersonnageItem">
                    <label>Charisme</label>
                    <input type="text" placeholder="Charisme" />
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
                <div className="creerpersonnageItem">
                    <label>Active</label>
                    <select className="creerpersonnagerSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="creerpersonnageButton">Create</button>
            </form>
        </div>
    );
}
