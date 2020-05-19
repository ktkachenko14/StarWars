import React from 'react';
import Planet from './Planet';
import  '../components/App.css'

class StarPlanets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        let url = 'https://swapi.dev/api/planets/';
        this.setState({
            isLoading: true
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            planets: [...this.state.planets, ...data.results],
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <h1>Star planets</h1>
                <div className="container">
                    <div className="row">
                        {this.state.isLoading ? "Loading..." : this.state.planets.map(planet => <div className="card col-md-3 m-3 p-3"><Planet planetInfo={planet} /></div>)}
                    </div>
                </div>
            </div>
        )
    }
}


export default StarPlanets;