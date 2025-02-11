import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login-Register/Login';

import Dashboard from './Pages/Dashboard/Dashboard';
import GestionDeStock from './Pages/Dashboard/Stock/GestionDeStock'
import AjoutDeStock from './Pages/Dashboard/Stock/AjoutDeStock'

import Cart from './Pages/Cart';
import Shop from './Pages/Shop/Shop';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Login-Register/Register';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // setCart([...cart, product]);
    setCart((prevCart) => {
      // Vérifier si le produit est déjà dans le panier
      const existingProductIndex = prevCart.findIndex((item) => item.nom === product.nom);
  
      if (existingProductIndex !== -1) {
        // Si le produit existe déjà, créer une nouvelle copie du panier
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingProductIndex) { //de part la verfication faite par le strictmode de react, les fonction qui modifie l'etat son souvent appelée deux fois c'est pourquoi nous ajoutons cette conditionde test pour eviter que lorsque notre fonction est appelee une deuxieme fois, l'element que nous avons modifie au prealable ne le soit plus 
            // Augmenter la quantité du produit existant
            return { ...item, quantite: item.quantite + product.quantite };
          }
          return item;
        });
        return updatedCart;
      } else {
        // Si le produit n'existe pas, l'ajouter au panier
        return [...prevCart, product];
      }
    });
    toast.success(`Votre article a été ajouté au panier !`);
  };


  const removeItemFromCart = (id) => {
    setCart([...cart.slice(0, id), ...cart.slice(id + 1)]);  // Filtrer l'élément à retirer en fonction de l'id
  };

  const increaseQuantity = (id) => {
    setCart(cart.map((article, index) => 
      index === id ? { ...article, quantite:  article.quantite + 1} : article
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map((article, index) => 
        index === id && article.quantite > 1 ? { ...article, quantite:  article.quantite - 1} : article
    ));
    };
  const total = cart.reduce((accumulateur, article) => {
    return accumulateur + article.quantite;
  }, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} cartCount={total} />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} cartCount={total}/>}></Route>
        <Route path='/shop' element={<Shop cartCount={total} addToCart={addToCart}/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/gestion-stock' element={<GestionDeStock />}></Route>
        <Route path='/ajout-stock' element={<AjoutDeStock />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
