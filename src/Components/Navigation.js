import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">
                        <li>Sign up Register</li>
                </NavLink>
                <NavLink to="/home">
                        <li>Photo</li>
                </NavLink>
                <NavLink to="/pokemons">
                        <li>Pokemons</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;