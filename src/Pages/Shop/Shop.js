import React from 'react';
import Products from './ShopComponents/ShopProducts/Products';
import Recommended from './ShopRecommended/Recommended';
import Header from '../../Components/Header/Header';
import Sidebar from './ShopSidebar/Sidebar';

const Shop = ({ cartCount }) => {
    return (
        <>
           <Sidebar />
           <Header cartCount={cartCount} />
           <Recommended />
           <Products /> 
        </>
    );
};

export default Shop;