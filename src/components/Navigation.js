import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import StarPeople from './StarPeople';
import StarPlanets from './StarPlanets';
import StarFilms from './StarFilms';
import StarVehicles from './StarVehicles';
import StarShips from './StarShips';
import  '../components/Navigation.css'
import WelcomePage from './WelcomePage';

function Navigation(props) {
    return (
        <div>
       
            <ul className="menu">
                
                <li >
                    <NavLink activeClassName="active" to='/' exact>StarWars</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/starwars/people'>People</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/starwars/planets'>Planets</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/starwars/films'>Films</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/starwars/vehicles'>Vehicles</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/starwars/ships'>Starships</NavLink>
                </li>
            </ul>
           
            
            <Switch>
                <Route path='/' exact component={WelcomePage} />
                <Route path='/starwars/people'  component={StarPeople} />
                <Route path='/starwars/planets'  component={StarPlanets} />
                <Route path='/starwars/films'  component={StarFilms} />
                <Route path='/starwars/vehicles' component={StarVehicles} />
                <Route path='/starwars/ships' component={StarShips} />
            </Switch>
        </div>
    );
}

export default Navigation;