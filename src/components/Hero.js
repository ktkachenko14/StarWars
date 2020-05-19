import React from 'react';
import  '../components/App.css'

class Hero extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const {name, 
              height, 
              mass, 
              hair_color, 
              skin_color, 
              eye_color,
              gender} = this.props.heroInfo;
        return (
           <ul className="list-group">
            
                <li className="list-group-item" style={{backgroundColor: "lightgray", color: "darkblue"}}><p>{name}</p></li>
                <li className="list-group-item"><span>Height: </span>{height}</li>
                <li className="list-group-item"><span>Mass: </span>{mass}</li>
                <li className="list-group-item"><span>Hair color: </span>{hair_color}</li>
                <li className="list-group-item"><span>Scin color: </span>{skin_color}</li>
                <li className="list-group-item"><span>Eye color: </span>{eye_color}</li>
                <li className="list-group-item"><span>Gender: </span>{gender}</li>
           </ul>
        )
    }
}


export default Hero;