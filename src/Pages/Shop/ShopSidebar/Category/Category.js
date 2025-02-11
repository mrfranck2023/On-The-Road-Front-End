import React from 'react';
import './Category.css';

const Category = ({handleChange}) => {
    return (
        <div>
           <h2 className='sidebar-title'>Catégorie</h2> 

           <div>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value="" type="radio" name="test" id="" />
                <span className="checkmark"></span>All
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Sportives" type="radio" name="test" id="" />
                <span className="checkmark"></span>Sportives
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Classiques" type="radio" name="test" id="" />
                <span className="checkmark"></span>Classiques
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} value="Urbaines" type="radio" name="test" id="" />
                <span className="checkmark"></span>Urbaines
            </label>
            
           </div>
        </div>
    );
};

export default Category;