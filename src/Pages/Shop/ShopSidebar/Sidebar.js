import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

import "./Sidebar.css";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <section className='sidebar'>
                <Category />
                <Price />
                <Colors />
            </section>
        </>
    );
};

export default Sidebar;