import React from 'react';
import './Colors.css'

const Colors = ({handleChange}) => {
    return (
        <div>
            <h2 className='sidebar-title color-title'>Colors</h2>

            <label className="sidebar-label-container">
                <input onChange={handleChange} value="" type="radio" name="test3" id="" />
                <span className="checkmark all"></span>All
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Black" type="radio" name="test3" id="" />
                <span className="checkmark" style={{background:"black", border: "2px solid black"}}></span>Black
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Blue" type="radio" name="test3" id="" />
                <span className="checkmark" style={{background:"blue", border: "2px solid black"}}></span>Blue
            </label>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Red" type="radio" name="test3" id="" />
                <span className="checkmark" style={{background:"red", border: "2px solid black"}}></span>Red
            </label>      
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="White" type="radio" name="test3" id="" />
                <span className="checkmark" style={{background:"white", border: "2px solid black"}}></span>White
            </label>      
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Custom" type="radio" name="test3" id="" />
                <span className="checkmark"></span>Custom
            </label>            
        </div>
    );
};

export default Colors;