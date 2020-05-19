import React from 'react';
import  '../components/App.css'

class Film extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const {title, 
            opening_crawl, 
            director, 
            producer, 
            release_date} = this.props.filmInfo;
        return (
           <ul className="list-group">
            
                <li className="list-group-item" style={{backgroundColor: "lightgray", color: "darkblue"}}><p>{title}</p></li>
                <li className="list-group-item"><span>Opening crawl: </span>{opening_crawl}</li>
                <li className="list-group-item"><span>Director: </span>{director}</li>
                <li className="list-group-item"><span>Producer: </span>{producer}</li>
                <li className="list-group-item"><span>Release date: </span>{release_date}</li>

           </ul>
        )
    }
}


export default Film;