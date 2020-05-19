import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import StarWars from './StarPeople';
import StarPeople from './StarPeople';
import StarFilms from './StarFilms';
import StarPlanets from './StarPlanets';
import StarVehicles from './StarVehicles';
import StarShips from './StarShips';
import Navigation from './Navigation';
import WelcomePage from './WelcomePage';
function App() {
    return (
        <div>
           <Router>
            <Switch>
                <Route path='/'>
                    <Navigation></Navigation>
                </Route>
                <Route path='/' >
                    <WelcomePage />
                </Route>
            </Switch>


            </Router>
        </div>
    );
}

export default App;