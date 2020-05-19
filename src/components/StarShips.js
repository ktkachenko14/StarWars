import React from 'react';
import Ship from './Ship';
import  '../components/App.css'

class StarShips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        let url = 'https://swapi.dev/api/starships/';
        this.setState({
            isLoading: true
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            ships: [...this.state.ships, ...data.results],
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <h1>Star ships</h1>
                <div className="container">
                    <div class="row">
                        {this.state.isLoading ? "Loading..." : this.state.ships.map(ship => <div className="card col-md-3 m-3 p-3"><Ship shipInfo={ship} /></div>)}
                    </div>
                </div>
            </div>
        )
    }
}


export default StarShips;