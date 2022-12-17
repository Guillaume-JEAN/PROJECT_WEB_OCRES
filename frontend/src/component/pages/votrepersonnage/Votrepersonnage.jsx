import React from 'react'
import axios from 'axios';
import "./votrepersonnage.css"



class Votrepersonnage extends React.Component{



    constructor(props)
    {
        super(props);
        this.state = {

            Spell : undefined,
        }
    }
    getSpell()
    {
        axios.get(`https://www.dnd5eapi.co/api/spells/bless`)
            .then(res => {
                const resultat = res.data;
                this.setState({ Spell: resultat});
            });
    }
    componentDidMount()
    {
        this.getSpell();

        fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
            "method": "GET",
            params: {count: '2'},
            "headers": {
                'X-RapidAPI-Key': '701b4d9889msh8db275bcb0a1d92p15c4c5jsn15120d91e9c5',
                'X-RapidAPI-Host': 'roll-the-dice.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    Dice: response
                })
            })
            .catch(err => { console.log(err);
            });
    }



    render=()=>
    {
    return(
        <div className='votrepersonnage'>
            <div className="flexbox-container1">
                <div className="flexbox-item flexbox-item-1">

                </div>
                <div className="flexbox-item flexbox-item-2"></div>
                <div className="flexbox-item flexbox-item-3"></div>

            </div>
            <div className="flexbox-container2">
                <div className="flexbox-item flexbox-item-4">
                        <input type="text" placeholder="Chercher votre sort  " />
                </div>
                <div className="flexbox-item flexbox-item-5"    >
                    <button className="lancerdeeButton" onClick={()=>this.getSpell()} >Lancer le dé</button>
                    <div Dice Result={this.state.Dice} />
                </div>
                <div className="flexbox-item flexbox-item-6">
                </div>
            </div>


        </div>

    )
}
}
export default Votrepersonnage;