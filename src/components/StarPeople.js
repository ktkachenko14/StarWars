import React from 'react';
import Hero from './Hero';
import  '../components/App.css'

class StarPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        let url = 'https://swapi.dev/api/people/';
        this.setState({
            isLoading: true
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            heroes: [...this.state.heroes, ...data.results],
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <h1>Star wars</h1>
                <div className="container">
                    <div class="row">
                        {this.state.isLoading ? "Loading..." : this.state.heroes.map(hero => <div className="card col-md-3 m-3 p-3"><Hero heroInfo={hero} /></div>)}
                    </div>
                </div>
            </div>
        )
    }
}


export default StarPeople;