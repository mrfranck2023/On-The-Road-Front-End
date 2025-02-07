import React from 'react';
import './Price.css'

const Price = () => {
    return (
        <div className='ml'>
            <h2 className='sidebar-title price-title'>Price</h2>

            <label className="sidebar-label-container">
                <input type="radio" name="test2" id="" />
                <span className="checkmark"></span>All
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" id="" />
                <span className="checkmark"></span>500k - 1m
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" id="" />
                <span className="checkmark"></span>1m - 5m
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test2" id="" />
                <span className="checkmark"></span>Plus de 5m
            </label>
    
        </div>
    );
};

export default Price;