import React from 'react';
import Vehicle from './Vehicle';
import  '../components/App.css'

class StarVehicles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        let url = 'https://swapi.dev/api/vehicles/';
        this.setState({
            isLoading: true
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            vehicles: [...this.state.vehicles, ...data.results],
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <h1>Star vehicles</h1>
                <div className="container">
                    <div class="row">
                        {this.state.isLoading ? "Loading..." : this.state.vehicles.map(vehicle => <div className="card col-md-3 m-3 p-3"><Vehicle vehicleInfo={vehicle} /></div>)}
                    </div>
                </div>
            </div>
        )
    }
}


export default StarVehicles;