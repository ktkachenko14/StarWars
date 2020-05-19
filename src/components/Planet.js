import React from 'react';
import  '../components/App.css'

class Planet extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const {name, 
            diameter, 
            climate, 
            terrain, 
            population} = this.props.planetInfo;
        return (
           <ul className="list-group">
            
                <li className="list-group-item" style={{backgroundColor: "lightgray", color: "darkblue"}}><p>{name}</p></li>
                <li className="list-group-item"><span>Diameter: </span>{diameter}</li>
                <li className="list-group-item"><span>Climate: </span>{climate}</li>
                <li className="list-group-item"><span>Terrain: </span>{terrain}</li>
                <li className="list-group-item"><span>Population: </span>{population}</li>
             
           </ul>
        )
    }
}


export default Planet;