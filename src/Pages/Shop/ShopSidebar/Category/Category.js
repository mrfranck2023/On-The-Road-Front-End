import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div>
           <h2 className='sidebar-title'>Catégorie</h2> 

           <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="" />
                <span className="checkmark"></span>All
            </label>

            <label className="sidebar-label-container">
                <input type="radio" name="test" id="" />
                <span className="checkmark"></span>Sportives
            </label>

            <label className="sidebar-label-container">
                <input type="radio" name="test" id="" />
                <span className="checkmark"></span>Classiques
            </label>
            
           </div>
        </div>
    );
};

export default Category;