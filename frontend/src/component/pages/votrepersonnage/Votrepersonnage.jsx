import React from 'react'
import "./votrepersonnage.css"


export default function Votrepersonnage(){
    return(
        <div className='votrepersonnage'>
            <div className="flexbox-container1">
                <div className="flexbox-item flexbox-item-1"></div>
                <div className="flexbox-item flexbox-item-2"></div>
                <div className="flexbox-item flexbox-item-3"></div>

            </div>
            <div className="flexbox-container2">
                <div className="flexbox-item flexbox-item-4">
                        <input type="text" placeholder="Chercher votre sort                                            " />
                </div>
                <div className="flexbox-item flexbox-item-5">
                    <button className="lancerdeeButton">Lancer le dé</button>
                </div>
                <div className="flexbox-item flexbox-item-6">
                </div>
            </div>


        </div>

    )
}