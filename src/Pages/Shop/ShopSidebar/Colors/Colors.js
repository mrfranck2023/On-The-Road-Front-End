import React from 'react';
import './Colors.css'

const Colors = () => {
    return (
        <div>
            <h2 className='sidebar-title color-title'>Colors</h2>

            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>All
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>Black
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>Blue
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>Red
            </label>      
            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>White
            </label>      
            <label className="sidebar-label-container">
                <input type="radio" name="test3" id="" />
                <span className="checkmark"></span>Custom
            </label>            
        </div>
    );
};

export default Colors;