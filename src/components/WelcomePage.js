import React from 'react';
import  '../components/App.css'

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div className="welcome">
                <h1>Welcome to Star Wars!</h1>
                <img className="welcomeImg" src="https://lumiere-a.akamaihd.net/v1/images/empire-40-masthead-1200_94036171.jpeg?region=0,0,1200,400"/>
            </div>
            
        )
    }
}

export default WelcomePage;