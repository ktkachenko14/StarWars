import React from 'react';
import  '../components/App.css'

class Ship extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const {name, 
            model, 
            manufacturer, 
            max_atmosphering_speed, 
            passengers} = this.props.shipInfo;
        return (
           <ul className="list-group">
            
                <li className="list-group-item" style={{backgroundColor: "lightgray", color: "darkblue"}}><p>{name}</p></li>
                <li className="list-group-item"><span>Model: </span>{model}</li>
                <li className="list-group-item"><span>Manufacturer: </span>{manufacturer}</li>
                <li className="list-group-item"><span>Max atmosphering speed: </span>{max_atmosphering_speed}</li>
                <li className="list-group-item"><span>Passengers: </span>{passengers}</li>
             
           </ul>
        )
    }
}


export default Ship;