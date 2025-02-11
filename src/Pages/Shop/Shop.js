import React, { useState } from 'react';
import Products from './ShopComponents/ShopProducts/Products';
import Recommended from './ShopRecommended/Recommended';
import Header from '../../Components/Header/Header';
import Sidebar from './ShopSidebar/Sidebar';
import produits from "../../db/vehicules_best_sellers"
// import Category from './ShopSidebar/Category/Category';

const Shop = ({ cartCount, addToCart }) => {
    const [selectedCategory, setSlectedCategory] = useState(null)

    //input filter 
    const [query, setQuery] = useState("")

    const handleInputChange = Event => {
        setQuery(Event.target.value)
    }

    const filteredItems = produits.filter((product) => 
    product.nom.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    //Radio filter
    const handleChange = Event => {
        setSlectedCategory(Event.target.value)
    }

    //pour les boutons de recommandations
    const handleClick = Event => {
        setSlectedCategory(Event.target.value)
    }

    function filteredData(produits, selected, query) {
        let filteredProducts = produits

        //Filtering Input Items
        if (query) {
            filteredProducts = filteredItems
            console.log(filteredItems)
        }

        //permet de recuperer l'element sur lequel filtrer
        //Selected Filter
        if (selected) {                                  //ci dessous c'est une destructuration on aurait pu a la place de {} mettre product et ensuite product.category, product.nom etc..
            filteredProducts = filteredProducts.filter(({category, color, company, price, nom}) => 
                category === selected || 
                color === selected || 
                company === selected || 
                price === selected || 
                nom === selected);
        }
        return filteredProducts;
        
    }

    const result = filteredData(produits, selectedCategory, query); //cette ligne appelle la fonction qui realise les filtre

    return (
        <>
           <Sidebar handleChange={handleChange}/>
           <Header cartCount={cartCount} handleInputChange={handleInputChange} query={query} estVisible={true}/>
           <Products result={result} handleClick={handleClick} addToCart={addToCart}/> 
        </>
    );
};

export default Shop;