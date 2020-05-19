import React from 'react';
import Film from './Film';
import  '../components/App.css'

class StarFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        let url = 'https://swapi.dev/api/films/';
        this.setState({
            isLoading: true
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <h1>Star films</h1>
                <div className="container">
                    <div class="row">
                        {this.state.isLoading ? "Loading..." : this.state.films.map(film => <div className="card col-md-3 m-3 p-3"><Film filmInfo={film} /></div>)}
                    </div>
                </div>
            </div>
        )
    }
}


export default StarFilms;