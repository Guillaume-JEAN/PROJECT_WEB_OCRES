import React from 'react';

class personnage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <h2>{this.props.data.Nom}</h2>
                <p>Niveau du personnage : {this.props.data.Niveau}</p>
                <p>Description du personnage: {this.props.data.description}</p>
            </div>
        );
    }
}

export default personnage;