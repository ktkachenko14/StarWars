import React from 'react';
import  '../components/App.css'

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const {name, 
            model, 
            manufacturer, 
            passengers, 
            vehicle_class} = this.props.vehicleInfo;
        return (
           <ul className="list-group">
            
                <li className="list-group-item" style={{backgroundColor: "lightgray", color: "darkblue"}}><p>{name}</p></li>
                <li className="list-group-item"><span >Model: </span> {model}</li>
                <li className="list-group-item"><span>Manufacturer: </span>{manufacturer}</li>
                <li className="list-group-item"><span>Passengers: </span>{passengers}</li>
                <li className="list-group-item"><span>Vehicle class: </span>{vehicle_class}</li>
             
           </ul>
        )
    }
}


export default Vehicle;